import { useEffect, useState } from "react";
import { TableView } from "components";
import { get } from "lodash";
import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";

export default function Post() {
    const [modal, setModal] = useState({ open: "", data: null });
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        if (modal.open === "") setRefetch(!refetch);
    }, [modal.open]);

    return (
        <div>
            <CreateModal modal={modal} setModal={setModal} />
            <UpdateModal modal={modal} setModal={setModal} />

            <TableView
                url="/post"
                title={"Посты"}
                urlSearchParams={{
                    include: "file",
                }}
                dataKey={"menu_item_id"}
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
                        render: (v) => get(v, "ru"),
                    },
                ]}
            />
        </div>
    );
}
