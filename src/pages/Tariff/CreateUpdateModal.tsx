import { Button, Col, Row } from "antd";
import { Field } from "formik";
import { get } from "lodash";

import { DrawerModal, Fields } from "components";
import Containers from "containers";
import { showNotification } from "hooks";
import constants from "helpers/constants";
import formatters from "helpers/formatters";

export default function CreateUpdateModal({ modal, setModal, setRefetch }) {
    const { row, open } = modal;

    return (
        <DrawerModal
            isOpen={open}
            onClose={() => setModal({ open: false })}
            title={row ? "Редактировать тарифа" : "Добавить тарифа"}
            key={"subscription"}
        >
            {open && (
                <Containers.Form
                    url={row ? `/tariff/${row.id}` : "/tariff/create"}
                    method={row ? "put" : "post"}
                    onError={() => {
                        showNotification("", "error");
                    }}
                    onSuccess={() => {
                        showNotification(
                            row ? "Отредактировано успешно" : "Создано успешно",
                            "success"
                        );
                        setRefetch((prev) => !prev);
                        setModal({ open: false });
                    }}
                    fields={[
                        {
                            name: "name",
                            value: get(row, "name"),
                            validations: [{ type: "required" }],
                            validationType: "string",
                        },
                        {
                            name: "customer_type",
                            value: get(row, "customer_type"),
                            validations: [{ type: "required" }],
                            validationType: "string",
                        },
                        {
                            name: "price",
                            value: formatters.formatCurrencyView(
                                get(row, "price")
                            ),
                            validations: [{ type: "required" }],
                            validationType: "string",
                            onSubmitValue: (value) =>
                                formatters.formatCurrencyApi(value),
                        },
                        {
                            name: "minute_price",
                            value: formatters.formatCurrencyView(
                                get(row, "minute_price")
                            ),
                            validations: [{ type: "required" }],
                            validationType: "string",
                            onSubmitValue: (value) =>
                                formatters.formatCurrencyApi(value),
                        },
                        {
                            name: "person_count",
                            value: get(row, "person_count"),
                            validations: [{ type: "required" }],
                            validationType: "string",
                        },
                        {
                            name: "active_day",
                            value: row
                                ? Object.keys(get(row, "active_day"))
                                : [],
                            validations: [
                                { type: "typeError" },
                                { type: "required" },
                            ],
                            validationType: "array",
                            onSubmitValue: (values: any) => {
                                return values.reduce((pv, cv) => {
                                    pv[cv] = 1;
                                    return pv;
                                }, {});
                            },
                        },
                        {
                            name: "valid_time",
                            value: row
                                ? parseInt(get(row, "valid_time")) / 60
                                : 0,
                            validations: [{ type: "required" }],
                            validationType: "string",
                            onSubmitValue: (value) => value * 60,
                        },
                        {
                            name: "active_time",
                            value: row
                                ? parseInt(get(row, "active_time")) / 60
                                : 0,
                            validations: [{ type: "required" }],
                            validationType: "string",
                            onSubmitValue: (value) => value * 60,
                        },
                        {
                            name: "status",
                            value: row ? get(row, "status") : 1,
                            validations: [{ type: "required" }],
                            validationType: "string",
                            required: true,
                        },
                        {
                            name: "description",
                            value: get(row, "description"),
                        },
                    ]}
                >
                    {({ isSubmitting }) => {
                        return (
                            <Row gutter={[16, 32]}>
                                <Col span={24}>
                                    <Field
                                        name={"name"}
                                        label={"Наименование тарифа"}
                                        placeholder={"Наименование тарифа"}
                                        component={Fields.Input}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Field
                                        name={"active_day"}
                                        label={"Дни действия тарифа"}
                                        placeholder={"Дни действия тарифа"}
                                        component={Fields.CheckboxGroup}
                                        options={constants.days}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Field
                                        name={"customer_type"}
                                        label={"Категория посетителя"}
                                        placeholder={"Категория посетителя"}
                                        component={Fields.Select}
                                        options={constants.customer_types}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Field
                                        name={"price"}
                                        label={"Цена тарифа"}
                                        placeholder={"Цена тарифа"}
                                        component={Fields.InputNumber}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Field
                                        name={"minute_price"}
                                        label={"Цена минуты"}
                                        placeholder={"Цена минуты"}
                                        component={Fields.InputNumber}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Field
                                        name={"person_count"}
                                        label={"Количество человек"}
                                        placeholder={"Количество человек"}
                                        component={Fields.Input}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Field
                                        name={"valid_time"}
                                        label={"Время активности"}
                                        placeholder={"Время активности"}
                                        type="number"
                                        component={Fields.Input}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Field
                                        name={"active_time"}
                                        label={"Время для  входа"}
                                        placeholder={"Время для  входа"}
                                        type="number"
                                        component={Fields.Input}
                                    />
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <Field
                                        name="status"
                                        label="Статус тарифа"
                                        placeholder="Статус тарифа"
                                        component={Fields.Select}
                                        options={constants.tariff_status}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Field
                                        name={"description"}
                                        label={"Описание тарифа"}
                                        placeholder={"Описание тарифа"}
                                        component={Fields.Input}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Button
                                        loading={isSubmitting}
                                        type="primary"
                                        htmlType="submit"
                                        style={{ width: "100%" }}
                                    >
                                        {row
                                            ? "Сохранит тарифа"
                                            : "Добавить тарифа"}
                                    </Button>
                                </Col>
                            </Row>
                        );
                    }}
                </Containers.Form>
            )}
        </DrawerModal>
    );
}
