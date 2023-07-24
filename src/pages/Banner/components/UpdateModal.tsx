import { message } from "antd";
import { isArray } from "lodash";
import { DrawerModal } from "components";
import Containers from "containers";
import FormFields from "./FormFields";

export default function UpdateModal({ modal, setModal }) {
    const { open, data } = modal;

    if (open !== "update") return <></>;

    return (
        <DrawerModal
            isOpen={open === "update"}
            onClose={() => setModal({ open: "" })}
            title={"Изменить баннер"}
            width={1000}
        >
            <Containers.Form
                url={`/banner/${data.id}`}
                method="put"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Успешно Обновлено");
                }}
                fields={[
                    {
                        name: "img_id",
                        value: data.file ? [data.file] : [],
                        validationType: "array",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => {
                            return isArray(value) && value.length
                                ? value[0].id
                                : null;
                        },
                    },
                    {
                        name: "type",
                        value: 1,
                    },
                    {
                        name: "title",
                        value: data.title,
                        validationType: "object",
                        validations: [{ type: "required" }],
                        lazy: (_, yup) =>
                            yup.object().shape({
                                uz: yup.string().required("Обязательное поле"),
                                ru: yup.string().required("Обязательное поле"),
                                en: yup.string().required("Обязательное поле"),
                            }),
                    },
                    {
                        name: "subtitle",
                        value: data.subtitle,
                        validationType: "object",
                        validations: [{ type: "required" }],
                        lazy: (_, yup) =>
                            yup.object().shape({
                                uz: yup.string().required("Обязательное поле"),
                                ru: yup.string().required("Обязательное поле"),
                                en: yup.string().required("Обязательное поле"),
                            }),
                    },
                    {
                        name: "url",
                        value: data.url,
                        validationType: "string",
                        validations: [{ type: "required" }],
                    },
                    {
                        name: "menu_item_id",
                        value: data.menuItem,
                        validationType: "object",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value: any) =>
                            value ? value.value : null,
                    },
                ]}
            >
                {(props: any) => (
                    <FormFields
                        {...props}
                        setModal={setModal}
                        isUpdate={true}
                    />
                )}
            </Containers.Form>
        </DrawerModal>
    );
}
