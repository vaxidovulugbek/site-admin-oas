import { Button, Col, Row } from "antd";
import { Fields } from "components";
import { Field } from "formik";
import { get } from "lodash";

export default function FormFields({
    isUpdate = false,
    setModal,
    isSubmitting,
}) {
    return (
        <Row gutter={[16, 16]}>
            <Col span={8}>
                <Field
                    label="Логотип"
                    name="icon_id"
                    component={Fields.FileUpload}
                />
            </Col>
            <Col span={16}>
                <Field
                    label="Выберите первоначальный категория"
                    placeholder="Выберите первоначальный категория"
                    name="parent_id"
                    component={Fields.AsyncSelectField}
                    url="/category"
                    optionLabel={(item: any) => get(item, "name.ru")}
                    optionValue={(item: any) => get(item, "id")}
                    loadOptionsParams={(text: string) => ({
                        filter: {
                            name: text,
                        },
                    })}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Названия (uz)"
                    placeholder="Названия (uz)"
                    name="name[uz]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Названия (ru)"
                    placeholder="Названия (ru)"
                    name="name[ru]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Названия (en)"
                    placeholder="Названия (en)"
                    name="name[en]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={24} className="modal-footer">
                <Button
                    onClick={() => setModal({ open: false })}
                    type="default"
                >
                    Отмена
                </Button>
                <Button
                    loading={isSubmitting}
                    htmlType="submit"
                    type="primary"
                    formAction="submit"
                    formTarget="category"
                >
                    {isUpdate ? "Сохранит" : "Создать"}
                </Button>
            </Col>
        </Row>
    );
}
