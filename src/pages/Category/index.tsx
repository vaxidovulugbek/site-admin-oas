import { ImageRender, TableView } from "components";
import { useEffect, useState } from "react";
import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";
import { get } from "lodash";

export default function Menu() {
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
                url="/category"
                title={"Категории"}
                urlSearchParams={{
                    include: "icon,parent",
                }}
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
                        dataIndex: "id",
                        render: (v) => v,
                    },
                    {
                        title: "Изображение",
                        dataIndex: "icon",
                        render: (icon) => <ImageRender image={icon} />,
                    },
                    {
                        title: "Названия (uz)",
                        dataIndex: "name",
                        render: (v) => v.uz,
                    },
                    {
                        title: "Названия (ru)",
                        dataIndex: "name",
                        render: (v) => v.ru,
                    },
                    {
                        title: "Названия (en)",
                        dataIndex: "name",
                        render: (v) => v.en,
                    },
                    {
                        title: "Первоначальный меню",
                        dataIndex: "parent",
                        render: (v) => get(v, "name.ru"),
                    },
                ]}
            />
        </div>
    );
}
