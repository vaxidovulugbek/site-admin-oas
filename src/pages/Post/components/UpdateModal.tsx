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
            title={"Редактировать пост"}
            width={900}
        >
            <Containers.Form
                id="post"
                url={`/post/${data.id}`}
                method="put"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Успешно Обновлено");
                }}
                fields={[
                    {
                        name: "photo",
                        validationType: "array",
                        value: [data.file],
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => {
                            return isArray(value) && value.length
                                ? value[0].id.toString()
                                : null;
                        },
                    },
                    {
                        name: "title",
                        validationType: "object",
                        value: data.title,
                        validations: [{ type: "required" }],
                        lazy: (_, yup) =>
                            yup.object().shape({
                                uz: yup.string().required("Обязательное поле"),
                                ru: yup.string().required("Обязательное поле"),
                                en: yup.string().required("Обязательное поле"),
                            }),
                    },
                    {
                        name: "description",
                        validationType: "object",
                        value: data.description,
                        validations: [{ type: "required" }],
                        lazy: (_, yup) =>
                            yup.object().shape({
                                uz: yup.string().required("Обязательное поле"),
                                ru: yup.string().required("Обязательное поле"),
                                en: yup.string().required("Обязательное поле"),
                            }),
                    },
                    {
                        name: "anons",
                        validationType: "object",
                        value: data.anons,
                        validations: [{ type: "required" }],
                        lazy: (_, yup) =>
                            yup.object().shape({
                                uz: yup.string().required("Обязательное поле"),
                                ru: yup.string().required("Обязательное поле"),
                                en: yup.string().required("Обязательное поле"),
                            }),
                    },
                    {
                        name: "category_id",
                        validationType: "object",
                        value: data.category,
                        onSubmitValue: (value) => value.value || null,
                    },
                    {
                        name: "top",
                        validationType: "string",
                        value: data.top,
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "type",
                        value: data.type || 1,
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "slug",
                        value: data.slug,
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "published_at",
                        value: data.published_at,
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
