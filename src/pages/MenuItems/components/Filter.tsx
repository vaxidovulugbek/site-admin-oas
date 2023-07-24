import { Col, Row } from "antd";
import { Fields } from "components";
import Containers from "containers";
import { Field } from "formik";
import { useEffect } from "react";

export default function Filter({ setFilter }) {
    useEffect(() => {
        setFilter((prev) => ({ ...prev, menu_id: 2 }));
    }, [setFilter]);

    return (
        <div className="filter">
            <Containers.Form url="/" method="get" fields={[]}>
                {() => {
                    return (
                        <Row gutter={[16, 16]}>
                            <Col span={6}>
                                <Field
                                    disabled={true}
                                    component={Fields.Select}
                                    value={2}
                                    options={[
                                        {
                                            label: "Frontend",
                                            value: 2,
                                        },
                                        {
                                            label: "Backend",
                                            value: 1,
                                        },
                                    ]}
                                />
                            </Col>
                        </Row>
                    );
                }}
            </Containers.Form>
        </div>
    );
}
