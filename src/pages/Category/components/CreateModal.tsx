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
            title={"Создать категория"}
            width={900}
        >
            <Containers.Form
                id="category"
                url="/category"
                method="post"
                onSuccess={() => {
                    setModal({ open: "" });
                    message.success("Создано успешно");
                }}
                fields={[
                    {
                        name: "name",
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
                        name: "parent_id",
                        validationType: "object",
                        onSubmitValue: (value: any) => value.id,
                    },
                    {
                        name: "icon_id",
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
                {(props) => <FormFields {...props} setModal={setModal} />}
            </Containers.Form>
        </DrawerModal>
    );
}
