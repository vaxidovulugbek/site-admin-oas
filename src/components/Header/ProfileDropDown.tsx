import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { useSelector } from "react-redux";
import { get } from "lodash";
import { dispatch } from "store";
import { authActions } from "actions";
import constants from "helpers/constants";

const items: MenuProps["items"] = [
    {
        key: "4",
        danger: true,
        style: { padding: 0 },
        label: (
            <div
                className="logout-btn"
                onClick={() => {
                    window.location.pathname = "/login";
                    dispatch(authActions.logoutAction());
                }}
            >
                <LogoutOutlined /> <span>Выйти</span>
            </div>
        ),
    },
];

const ProfileDropDown = () => {
    const { user } = useSelector((state: any) => state.auth);
    const role = constants.rolesLabel.find(
        (role) => role.value === get(user, "role")
    );

    return (
        <Dropdown className="profile_dropdown" menu={{ items }}>
            <div>
                <Space className="space">
                    <div className="avatar">
                        <img
                            src={require("assets/images/logo.png")}
                            alt="logo"
                        />
                    </div>
                    <div className="space_info">
                        <p className="username">{get(user, "username")}</p>
                        <p className="email">{get(role, "label")}</p>
                    </div>
                    <DownOutlined />
                </Space>
            </div>
        </Dropdown>
    );
};

export default ProfileDropDown;
