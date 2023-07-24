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
            title={"Редактировать категория"}
            width={900}
        >
            <Containers.Form
                id="category"
                url={`/category/${data.id}`}
                method="put"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Успешно Обновлено");
                }}
                fields={[
                    {
                        name: "name",
                        validationType: "object",
                        value: data.name,
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
                        name: "parent_id",
                        value: data.parent,
                        validationType: "object",
                        onSubmitValue: (value) => value.value || null,
                    },
                    {
                        name: "icon_id",
                        value: data.icon ? [data.icon] : [],
                        validationType: "array",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => {
                            return isArray(value) && value.length
                                ? value[0].id
                                : null;
                        },
                    },
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
