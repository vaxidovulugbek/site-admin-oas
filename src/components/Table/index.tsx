import { FunctionComponent, useEffect, useState } from "react";
import { Table, message } from "antd";
import { get } from "lodash";
//
import PropTypes from "./TableType";
import TableHeader from "./TableHeader";
import { useDelete, useFetchList } from "hooks";
import { ActionButtons, ConfirmModal } from "components";

const TableView: FunctionComponent<PropTypes> = ({
    title,
    url,
    dataKey = "id",
    onCreate = {},
    filterComponent,
    columns,
    rowSelect = false,
    pageSize = 30,
    urlSearchParams,
    getSelectedRows = () => {},
    onEdit,
    onDoubleClick,
    isDelete = false,
    refetch,
    onCancel,
}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [size, setSize] = useState(pageSize);
    const [deleteConfirm, setDeleteConfirm] = useState({
        open: false,
        row: null,
    });

    const deleteFn = useDelete({
        url,
        method: "delete",
        body: {},
        customQueryFn: "",
    });

    const data: any = useFetchList({
        url,
        urlSearchParams: {
            limit: size,
            ...urlSearchParams,
        },
    });

    const onSelectChange = (newSelectedRowKeys: any) => {
        setSelectedRowKeys(newSelectedRowKeys);
        getSelectedRows(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    function getActionButtons() {
        type types = {
            title: string;
            key: string;
            dataIndex: string;
            render?: any;
        };
        const actions: types = {
            title: "",
            key: "",
            dataIndex: "",
        };

        if (onCancel || onEdit || isDelete) {
            actions.render = (value: any) => {
                return (
                    <ActionButtons
                        onCancel={onCancel ? () => onCancel(value) : undefined}
                        onEdit={onEdit ? () => onEdit(value) : undefined}
                        onDelete={
                            isDelete
                                ? () =>
                                      setDeleteConfirm({
                                          open: true,
                                          row: value,
                                      })
                                : undefined
                        }
                    />
                );
            };
        }

        return actions;
    }

    useEffect(() => {
        data.refetch();
    }, [refetch]);

    const total = get(data, "meta.totalCount");
    const currentPage = get(data, "meta.currentPage");

    const startedIndex =
        currentPage === 1 ? 1 : (currentPage - 1 || 0) * pageSize;
    const endedIndex =
        startedIndex + pageSize > total ? total : startedIndex + pageSize;

    return (
        <div className="table">
            <ConfirmModal
                open={deleteConfirm.open}
                onCancel={() => setDeleteConfirm({ open: false, row: null })}
                onOk={() => {
                    deleteFn.mutateAsync(get(deleteConfirm, "row.id"));
                    data.refetch();
                    message.success("Удалено успешно");
                    setDeleteConfirm({ open: false, row: null });
                }}
                okText={"Удалить"}
                cancelText={"Позже"}
                title={"Вы уверены, что хотите удалить ?"}
                icon={false}
            />
            <TableHeader
                onCreate={onCreate}
                title={title}
                filterComponent={filterComponent}
            />
            <p className="total_count">
                <span>Результаты</span> {startedIndex}-{endedIndex}{" "}
                <span>из</span> {get(data, "meta.totalCount")}
            </p>
            <Table
                pagination={{
                    total: total,
                    pageSize: size,
                    onChange: (e) => {
                        get(data, "setPage")(e);
                    },
                    showSizeChanger: true,
                    onShowSizeChange: (_, size) => {
                        setSize(size);
                    },
                }}
                onRow={(item) => {
                    return {
                        onDoubleClick: () =>
                            onDoubleClick
                                ? onDoubleClick(item)
                                : onEdit
                                ? onEdit(item)
                                : {},
                    };
                }}
                key={url}
                loading={get(data, "isLoading")}
                columns={[...columns, getActionButtons()]}
                dataSource={get(data, "data")?.map((i: any) => {
                    i.child = i.children;
                    delete i.children;
                    return {
                        key: i[dataKey],
                        ...i,
                    };
                })}
                {...(rowSelect ? { rowSelection: rowSelection } : null)}
            />
        </div>
    );
};

export default TableView;
