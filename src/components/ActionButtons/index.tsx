import {
    CloseOutlined,
    DeleteOutlined,
    EditOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";

type PropTypes = {
    onEdit?: () => {} | null | undefined;
    onDelete?: () => {} | null | undefined;
    onCancel?: () => {} | null | undefined;
};

const ActionButtons: React.FunctionComponent<PropTypes> = ({
    onEdit,
    onDelete,
    onCancel,
}) => {
    return (
        <Dropdown
            className="action-button"
            menu={{
                items: [
                    typeof onCancel === "function"
                        ? {
                              key: "0",
                              label: "Отменить",
                              icon: <CloseOutlined />,
                              style: { color: "red" },
                              onClick: onCancel,
                          }
                        : null,
                    typeof onDelete === "function"
                        ? {
                              key: "0",
                              label: "Удалить",
                              icon: <DeleteOutlined />,
                              style: { color: "red" },
                              onClick: onDelete,
                          }
                        : null,
                    typeof onEdit === "function"
                        ? {
                              key: "1",
                              label: "Редактировать",
                              icon: <EditOutlined />,
                              onClick: onEdit,
                          }
                        : null,
                ],
            }}
        >
            <EllipsisOutlined
                style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    rotate: "90deg",
                    cursor: "pointer",
                }}
            />
        </Dropdown>
    );
};

export default ActionButtons;
