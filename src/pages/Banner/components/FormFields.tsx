import { Button, Col, Row } from "antd";
import { Fields } from "components";
import { Field } from "formik";
import { get } from "lodash";

export default function FormFields({
    setModal,
    isSubmitting,
    isUpdate = false,
}) {
    return (
        <Row gutter={[16, 16]} className="banner_form">
            <Col span={24}>
                <Field
                    name="img_id"
                    label="Баннер"
                    component={Fields.FileUpload}
                />
            </Col>
            <Col span={12}>
                <Field
                    name="url"
                    label="URL"
                    placeholder="URL"
                    component={Fields.Input}
                />
            </Col>
            <Col span={12}>
                <Field
                    name="menu_item_id"
                    label="Меню"
                    placeholder="Меню"
                    component={Fields.AsyncSelectField}
                    url="/menu-items"
                    optionLabel={(item: any) => get(item, "title.ru")}
                    optionValue={(item: any) => get(item, "menu_item_id")}
                    loadOptionsParams={(text: string) => ({
                        filter: {
                            menu_id: 2,
                            name: text,
                        },
                    })}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="title[uz]"
                    label="Заголовок (uz)"
                    placeholder="Заголовок (uz)"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="title[ru]"
                    label="Заголовок (ru)"
                    placeholder="Заголовок (ru)"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="title[en]"
                    label="Заголовок (en)"
                    placeholder="Заголовок (en)"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="subtitle[uz]"
                    label="Подзаголовок (uz)"
                    placeholder="Подзаголовок (uz)"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="subtitle[ru]"
                    label="Подзаголовок (ru)"
                    placeholder="Подзаголовок (ru)"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="subtitle[en]"
                    label="Подзаголовок (en)"
                    placeholder="Подзаголовок (en)"
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
