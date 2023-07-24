import { Button, Col, Row } from "antd";
import { Fields } from "components";
import { Field } from "formik";
import time from "helpers/time";
import { get } from "lodash";

export default function FormFields({
    isUpdate = false,
    setModal,
    isSubmitting,
    setFieldValue,
}) {
    return (
        <Row gutter={[16, 16]}>
            <Col span={8}>
                <Field
                    label="Основное изображение"
                    name="photo"
                    component={Fields.FileUpload}
                />
            </Col>
            <Col></Col>
            <Col span={24}>
                <Field
                    name="category_id"
                    url="/category"
                    label="Выберите категория"
                    placeholder="Выберите категория"
                    component={Fields.AsyncSelectField}
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
                    format={"DD.MM.YYYY / HH:mm"}
                    onChange={(e) =>
                        setFieldValue("published_at", time.toTimestamp(e))
                    }
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
