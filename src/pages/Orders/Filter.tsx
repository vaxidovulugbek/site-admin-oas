import { Col, Row } from "antd";
import { Field } from "formik";

import { Fields } from "components";
import Containers from "containers";
import constants from "helpers/constants";
import time from "helpers/time";

export default function Filter({ setFilter }) {
    return (
        <div className="filter">
            <Containers.Form url="/" method="post" fields={[]}>
                {() => {
                    return (
                        <Row gutter={16}>
                            <Col span={4}>
                                <Field
                                    name="name"
                                    component={Fields.Input}
                                    placeholder={"Наименование"}
                                    onChange={(value) => {
                                        setFilter((prev) => ({
                                            ...prev,
                                            name: value,
                                        }));
                                    }}
                                />
                            </Col>
                            <Col span={4}>
                                <Field
                                    name="phone"
                                    component={Fields.PhoneNumber}
                                    placeholder={"Телефон"}
                                    onChange={(e) => {
                                        setFilter((prev) => ({
                                            ...prev,
                                            phone: e
                                                .replace(/[\(\)\-+']+/g, "")
                                                .replace(" ", "")
                                                .replace(" ", ""),
                                        }));
                                    }}
                                />
                            </Col>
                            <Col span={4}>
                                <Field
                                    name="status"
                                    component={Fields.Select}
                                    placeholder={"Статус"}
                                    options={constants.orderStatus}
                                    onChange={(e) =>
                                        setFilter((prev) => ({
                                            ...prev,
                                            status: e,
                                        }))
                                    }
                                />
                            </Col>
                            <Col span={4}>
                                <Field
                                    name="date"
                                    component={Fields.DatePickerFields}
                                    placeholder={"Дата начала"}
                                    onChange={(e) => {
                                        setFilter((prev) => ({
                                            ...prev,
                                            from: time.toTimestamp(e),
                                        }));
                                    }}
                                />
                            </Col>
                            <Col span={4}>
                                <Field
                                    name="date"
                                    component={Fields.DatePickerFields}
                                    placeholder={"Дата окончания"}
                                    onChange={(e) => {
                                        setFilter((prev) => ({
                                            ...prev,
                                            to: time.toTimestamp(e),
                                        }));
                                    }}
                                />
                            </Col>
                        </Row>
                    );
                }}
            </Containers.Form>
        </div>
    );
}
