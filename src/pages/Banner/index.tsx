import { ImageRender, TableView } from "components";
import { useEffect, useState } from "react";
import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";

export default function Banner() {
    const [modal, setModal] = useState({ open: "", data: null });
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        setRefetch(!refetch);
    }, [modal.open]);

    return (
        <>
            <CreateModal modal={modal} setModal={setModal} />
            <UpdateModal modal={modal} setModal={setModal} />

            <TableView
                url="/banner"
                title="Баннеры"
                urlSearchParams={{
                    include: "file,menuItem",
                }}
                refetch={refetch}
                isDelete={true}
                onEdit={(row) => setModal({ open: "update", data: row })}
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
                        dataIndex: "file",
                        render: (v) => <ImageRender image={v} />,
                    },
                    {
                        title: "Заголовок (uz)",
                        dataIndex: "title",
                        render: (v) => v.uz,
                    },
                    {
                        title: "Заголовок (ru)",
                        dataIndex: "title",
                        render: (v) => v.ru,
                    },
                    {
                        title: "Заголовок (en)",
                        dataIndex: "title",
                        render: (v) => v.en,
                    },
                    {
                        title: "URL",
                        dataIndex: "url",
                        render: (v) => v,
                    },
                ]}
            />
        </>
    );
}
