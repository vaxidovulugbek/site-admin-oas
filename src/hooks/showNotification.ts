import { notification } from "antd";

function showNotification(
    message: string = "Какая-то ошибка",
    type: "error" | "info" | "success"
) {
    if (notification[type]) {
        notification[type]({
            message,
            className: type === "error" ? "error" : "success",
            duration: 1,
            closeIcon: null,
        });
    }
}

export default showNotification;
