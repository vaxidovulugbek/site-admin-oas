import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ProfileDropDown from "./ProfileDropDown";
//
const { Header } = Layout;

export default function HeaderComponent({ collapsed, setCollapsed }) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ background: colorBgContainer, paddingLeft: 0 }}>
            <Button
                className="collapse-button"
                type="link"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: "16px",
                    width: 64,
                }}
            />
            <ProfileDropDown />
        </Header>
    );
}
