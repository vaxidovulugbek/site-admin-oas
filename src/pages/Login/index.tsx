import { Field } from "formik";
import { Fields } from "components";
import Containers from "containers";
import { Button, Card, Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { authActions } from "actions";
import { showNotification } from "hooks";

export default function Login() {
    const dispatch = useDispatch();

    return (
        <div className="login">
            <Card>
                <Containers.Form
                    url="/user/login"
                    method="post"
                    onSuccess={({ data }: any) =>
                        dispatch(authActions.loginAction(data))
                    }
                    onError={() => {
                        showNotification("Какая-то ошибка", "error");
                    }}
                    fields={[
                        {
                            name: "username",
                            validationType: "string",
                            validations: [{ type: "required" }],
                        },
                        {
                            name: "password",
                            validationType: "string",
                            validations: [{ type: "required" }],
                        },
                    ]}
                >
                    {({ isSubmitting }) => {
                        return (
                            <Row gutter={[16, 16]}>
                                <Col span={24}>
                                    <Field
                                        name="username"
                                        label="Username"
                                        component={Fields.Input}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Field
                                        type="password"
                                        name="password"
                                        label="Password"
                                        component={Fields.Input}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={isSubmitting}
                                    >
                                        Входить
                                    </Button>
                                </Col>
                            </Row>
                        );
                    }}
                </Containers.Form>
            </Card>
        </div>
    );
}
