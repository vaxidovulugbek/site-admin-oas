import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
//
import menus from "./menus";
import { useSelector } from "react-redux";
import { ReactComponent as Rteco } from "assets/images/rteco.svg";
import { ReactComponent as Rteco2 } from "assets/images/rteco2.svg";

const { Sider } = Layout;

export default function SideBar({ collapsed }) {
    const { user } = useSelector((state: any) => state.auth);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <Sider
            width={310}
            className="sidebar"
            collapsible
            collapsed={collapsed}
            trigger={null}
            theme="light"
        >
            <div style={{ padding: 24 }}>
                {!collapsed ? <Rteco /> : <Rteco2 />}
            </div>
            <Menu
                defaultSelectedKeys={[pathname]}
                onClick={({ key }) => navigate(key)}
                mode="inline"
                items={menus.filter((m) => m.roles.includes(user.role))}
            />
        </Sider>
    );
}
