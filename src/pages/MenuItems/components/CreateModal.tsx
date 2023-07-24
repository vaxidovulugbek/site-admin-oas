import { DrawerModal } from "components";
import Containers from "containers";
import FormFields from "./FormFields";
import { message } from "antd";
// import { isArray } from "lodash";

export default function CreateModal({ modal, setModal }) {
    const { open } = modal;

    if (open !== "create") return <></>;

    return (
        <DrawerModal
            isOpen={open === "create"}
            onClose={() => setModal(false)}
            title={"Создать меню"}
            width={900}
        >
            <Containers.Form
                id="menu-items"
                url="/menu-items"
                method="post"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Создано успешно");
                }}
                fields={[
                    {
                        name: "menu_id",
                        value: 2,
                    },
                    {
                        name: "title",
                        validationType: "object",
                        value: {
                            uz: "",
                            ru: "",
                            en: "",
                        },
                        validations: [{ type: "required" }],
                        lazy: (_, yup) =>
                            yup.object().shape({
                                uz: yup.string().required("Обязательное поле"),
                                ru: yup.string().required("Обязательное поле"),
                                en: yup.string().required("Обязательное поле"),
                            }),
                    },
                    {
                        name: "menu_item_parent_id",
                        validationType: "object",
                        onSubmitValue: (value) => value.value || null,
                    },
                    {
                        name: "sort",
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "url",
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    // {
                    //     name: "icon_id",
                    //     validationType: "array",
                    //     validations: [{ type: "required" }],
                    //     onSubmitValue: (value) => {
                    //         return isArray(value) && value.length
                    //             ? value[0].id
                    //             : null;
                    //     },
                    // },
                ]}
            >
                {(props) => <FormFields {...props} setModal={setModal} />}
            </Containers.Form>
        </DrawerModal>
    );
}
