import { useEffect, useState } from "react";
import { TableView } from "components";
import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";
// import UpdateModal from "./components/UpdateModal";

export default function Pages() {
    const [modal, setModal] = useState({ open: "", data: null });
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        if (modal.open === "") setRefetch(!refetch);
    }, [modal.open]);

    return (
        <div className="subscription">

            <CreateModal modal={modal} setModal={setModal} />
            <UpdateModal modal={modal} setModal={setModal} />

            <TableView
                url="/pages"
                urlSearchParams={{
                    include: "files"
                }}
                title="Страницы"
                // onEdit={(row) => setModal({ open: true, data: row })}
                // filterComponent={<Filter setFilter={setFilter} />}
                onEdit={(row: any) => setModal({ open: "update", data: row })}
                onCreate={{
                    title: "Добавить",
                    onClick: () => setModal({ open: "create", data: null }),
                }}
                refetch={refetch}
                columns={[
                    {
                        title: "ID",
                        dataIndex: "id",
                        render: v => v
                    },
                    {
                        title: "Заголовок",
                        dataIndex: "title",
                        render: v => v.ru
                    },
                    {
                        title: "Подзаголовок",
                        dataIndex: "subtitle",
                        render: v => v.ru
                    },
                    {
                        title: "Описание",
                        dataIndex: "description",
                        render: (value) => value.ru,
                    },
                    {
                        title: "Содержание",
                        dataIndex: "content",
                        render: (value) => value.ru,
                    },
                    {
                        title: "URL",
                          dataIndex: "slug",
                        render: (value) => value,
                    },
                   
                ]}
            />
        </div>
    );
}
