import { DrawerModal } from "components";
import Containers from "containers";
import FormFields from "./FormFields";
import { message } from "antd";
import { isArray } from "lodash";

export default function CreateModal({ modal, setModal }) {
    const { open } = modal;

    if (open !== "create") return <></>;

    return (
        <DrawerModal
            isOpen={open === "create"}
            onClose={() => setModal(false)}
            title={"Создать пост"}
            width={900}
        >
            <Containers.Form
                id="post"
                url="/post"
                method="post"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Создано успешно");
                }}
                fields={[
                    {
                        name: "photo",
                        validationType: "array",
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
                        name: "description",
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
                        name: "anons",
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
                        name: "category_id",
                        validationType: "object",
                        onSubmitValue: (value) => value.value || null,
                    },
                    {
                        name: "top",
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "type",
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "slug",
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "published_at",
                        validationType: "string",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value) => value || null,
                    },
                    {
                        name: "files",
                        validationType: "array",
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
                {(props) => <FormFields {...props} setModal={setModal} />}
            </Containers.Form>
        </DrawerModal>
    );
}
