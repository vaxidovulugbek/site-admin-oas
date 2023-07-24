import { DrawerModal } from "components";
import Containers from "containers";
import { isArray } from "lodash";
import FormFields from "./FormFields";
import { message } from "antd";

export default function CreateModal({ modal, setModal }) {
    const { open } = modal;

    if (open !== "create") return <></>;

    return (
        <DrawerModal
            isOpen={open === "create"}
            onClose={() => setModal(false)}
            title={"Создать баннер"}
            width={1000}
        >
            <Containers.Form
                url="/banner"
                method="post"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Создано успешно");
                }}
                fields={[
                    {
                        name: "img_id",
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
                        value: {
                            uz: "",
                            ru: "",
                            en: "",
                        },
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
                        value: {
                            uz: "",
                            ru: "",
                            en: "",
                        },
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
                        validationType: "string",
                        validations: [{ type: "required" }],
                    },
                    {
                        name: "menu_item_id",
                        validationType: "object",
                        validations: [{ type: "required" }],
                        onSubmitValue: (value: any) =>
                            value ? value.value : null,
                    },
                ]}
            >
                {(props: any) => <FormFields {...props} setModal={setModal} />}
            </Containers.Form>
        </DrawerModal>
    );
}
