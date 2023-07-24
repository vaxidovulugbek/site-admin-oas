import { ComponentProps, FunctionComponent, useState } from "react";
import { Layout, Space } from "antd";
//
import { Header, SideBar } from "components";
import Context from "context";

const { Content } = Layout;

const LayoutApp: FunctionComponent<ComponentProps<any>> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Context.Provider value={{}}>
                <Layout>
                    <SideBar collapsed={collapsed} />
                    <Layout>
                        <Header
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                        />
                        <Content className="content">{children}</Content>
                    </Layout>
                </Layout>
            </Context.Provider>
        </Space>
    );
};

export default LayoutApp;
