import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

export default function DrawerModal({
    width = 600,
    title = "",
    isOpen,
    onClose,
    children,
    className = "",
    footer = null,
}) {
    return (
        <Drawer
            width={width}
            className={`drawer_view ${className}`}
            open={isOpen}
            onClose={onClose}
            title={title}
            footer={footer}
            closeIcon={<CloseOutlined />}
        >
            {children}
        </Drawer>
    );
}
