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
                    name="photo"
                    component={Fields.FileUpload}
                />
            </Col>
            <Col span={16}>
                <Field
                    label="Выберите первоначальный меню"
                    placeholder="Выберите первоначальный меню"
                    name="menu_item_parent_id"
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
                    label="Заголовок (uz)"
                    placeholder="Заголовок (uz)"
                    name="title[uz]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Заголовок (ru)"
                    placeholder="Заголовок (ru)"
                    name="title[ru]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Заголовок (en)"
                    placeholder="Заголовок (en)"
                    name="title[en]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Описание (uz)"
                    placeholder="Описание (uz)"
                    name="description[uz]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Описание (ru)"
                    placeholder="Описание (ru)"
                    name="description[ru]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Описание (en)"
                    placeholder="Описание (en)"
                    name="description[en]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Анонс (uz)"
                    placeholder="Анонс (uz)"
                    name="anons[uz]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Анонс (ru)"
                    placeholder="Анонс (ru)"
                    name="anons[ru]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Анонс (en)"
                    placeholder="Анонс (en)"
                    name="anons[en]"
                    component={Fields.Input}
                />
            </Col>

            <Col span={8}>
                <Field
                    name="slug"
                    label="URL"
                    placeholder="URL"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="top"
                    label="Топ"
                    placeholder="Топ"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    name="published_at"
                    label="Опубликовано в"
                    placeholder="Опубликовано в"
                    component={Fields.DatePickerFields}
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
