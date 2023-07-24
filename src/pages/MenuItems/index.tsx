import { useEffect, useState } from "react";
import { TableView } from "components";
import { get } from "lodash";
import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";
import Filter from "./components/Filter";

export default function Menu() {
    const [modal, setModal] = useState({ open: "", data: null });
    const [refetch, setRefetch] = useState(false);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        if (modal.open === "") setRefetch(!refetch);
    }, [modal.open]);

    return (
        <div>
            <CreateModal modal={modal} setModal={setModal} />
            <UpdateModal modal={modal} setModal={setModal} />

            <TableView
                url="/menu-items"
                title={"Пункты меню"}
                urlSearchParams={{
                    include: "menuItemParent",
                    filter,
                    sort: "-menu_item_id",
                }}
                dataKey={"menu_item_id"}
                filterComponent={<Filter setFilter={setFilter} />}
                isDelete={true}
                refetch={refetch}
                onEdit={(row: any) => setModal({ open: "update", data: row })}
                onCreate={{
                    title: "Добавить",
                    onClick: () => setModal({ open: "create", data: null }),
                }}
                columns={[
                    {
                        title: "ID",
                        dataIndex: "menu_item_id",
                        render: (v) => v,
                    },
                    {
                        title: "Названия",
                        dataIndex: "title",
                        render: (v) => v.ru,
                    },
                    {
                        title: "URL",
                        dataIndex: "url",
                        render: (v) => v,
                    },
                    {
                        title: "Первоначальный меню",
                        dataIndex: "menuItemParent",
                        render: (v) => get(v, "title.ru"),
                    },
                    {
                        title: "Сортировать",
                        dataIndex: "sort",
                        render: (v) => v,
                    },
                ]}
            />
        </div>
    );
}
