import { Modal, Space } from "antd";
import { useEffect } from "react";

export default function ConfirmModal({
    title,
    onOk,
    onCancel,
    okText,
    cancelText,
    icon,
    open,
    className = "",
}) {
    const [modal, contextHolder] = Modal.useModal();

    const confirm = () =>
        modal.confirm({
            title,
            open,
            onCancel,
            onOk,
            cancelText,
            okText,
            okButtonProps: { style: { backgroundColor: "red" } },
            icon: <></>,
            className,
        });

    useEffect(() => {
        if (open) confirm();
    }, [open]);

    return <Space>{contextHolder}</Space>;
}
