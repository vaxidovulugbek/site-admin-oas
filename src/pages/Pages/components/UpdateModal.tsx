import { DrawerModal } from "components";
import Containers from "containers";
import FormFields from "./FormFields";
import { message } from "antd";
import { isArray } from "lodash";

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
                        name: "subtitle",
                        validationType: "object",
                        value: data.subtitle,
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
                        name: "description",
                        validationType: "object",
                        value: data.description,
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
                        name: "content",
                        validationType: "object",
                        value: data.content,
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
                        name: "slug",
                        value: data.slug,
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },

                    {
                        name: "files",
                        validationType: "array",
                        value: data.files,
                        onSubmitValue: (value) => {
                            return isArray(value) && value.length
                                ? value.map((v, i) => ({
                                      file_id: v.id,
                                      sort: i,
                                  }))
                                : null;
                        },
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
