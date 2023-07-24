import { DrawerModal } from "components";
import Containers from "containers";
import FormFields from "./FormFields";
import { message } from "antd";
// import { isArray } from "lodash";

export default function UpdateModal({ modal, setModal }) {
    const { open, data } = modal;

    if (open !== "update") return <></>;

    return (
        <DrawerModal
            isOpen={open === "update"}
            onClose={() => setModal(false)}
            title={"Редактировать меню"}
            width={900}
        >
            <Containers.Form
                id="menu-items"
                url={`/menu-items/${data.menu_item_id}`}
                method="put"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Успешно Обновлено");
                }}
                fields={[
                    {
                        name: "menu_id",
                        value: 2,
                    },
                    {
                        name: "title",
                        validationType: "object",
                        value: data.title,
                        validations: [{ type: "required" }],
                        lazy: (_: any, yup: any) => {
                            return yup.object().shape({
                                uz: yup.string().required("Обязательное поле"),
                                ru: yup.string().required("Обязательное поле"),
                                en: yup.string().required("Обязательное поле"),
                            });
                        },
                        onSubmitValue: (values) => ({
                            uz: values.uz,
                            ru: values.ru,
                            en: values.en,
                        }),
                    },
                    {
                        name: "menu_item_parent_id",
                        value: data.menuItemParent,
                        validationType: "object",
                        onSubmitValue: (value) => value.value || null,
                    },
                    {
                        name: "sort",
                        value: data.sort,
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "url",
                        value: data.url,
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    // {
                    //     name: "icon_id",
                    //     value: data.icon ? [data.icon] : [],
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
                {(props) => (
                    <FormFields
                        {...props}
                        isUpdate={true}
                        setModal={setModal}
                    />
                )}
            </Containers.Form>
        </DrawerModal>
    );
}
