import { Button, Col, Row } from "antd";
import { Fields } from "components";
import { Field } from "formik";
// import { get } from "lodash";

export default function FormFields({
    isUpdate = false,
    setModal,
    isSubmitting,
}) {
    return (
        <Row gutter={[16, 16]}>
            {/* <Col span={8}>
                <Field
                    label="Логотип"
                    name="icon_id"
                    component={Fields.FileUpload}
                />
            </Col> */}

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
                    label="Подзаголовок (uz)"
                    placeholder="Подзаголовок (uz)"
                    name="subtitle[uz]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Подзаголовок (ru)"
                    placeholder="Подзаголовок (ru)"
                    name="subtitle[ru]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Подзаголовок (en)"
                    placeholder="Подзаголовок (en)"
                    name="subtitle[en]"
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
                    label="Содержание (uz)"
                    placeholder="Содержание (uz)"
                    name="content[uz]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Содержание (ru)"
                    placeholder="Содержание (ru)"
                    name="content[ru]"
                    component={Fields.Input}
                />
            </Col>
            <Col span={8}>
                <Field
                    label="Содержание (en)"
                    placeholder="Содержание (en)"
                    name="content[en]"
                    component={Fields.Input}
                />
            </Col>

            <Col span={8}>
                <Field
                    label="URL"
                    placeholder="URL"
                    name="slug"
                    component={Fields.Input}
                />
            </Col>
            <Col span={24}>
                <Field
                    label="Другие изображения"
                    name="files"
                    component={Fields.FileUpload}
                    multiple={true}
                />
            </Col>
            {/* <Col span={12}>
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
            <Col span={6}>
                <Field
                    name="url"
                    label="URL"
                    placeholder="URL"
                    component={Fields.Input}
                />
            </Col>
            <Col span={6}>
                <Field
                    name="sort"
                    label="Сортировать"
                    placeholder="Сортировать"
                    component={Fields.Input}
                />
            </Col> */}

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
