import {
    PoundCircleTwoTone,
    FolderOpenTwoTone,
    PictureTwoTone,
    AppstoreTwoTone,
    CalendarTwoTone,
    PlusCircleTwoTone,
} from "@ant-design/icons";
import constants from "helpers/constants";

const menus = [
    {
        key: "/menu-items",
        label: "Меню",
        icon: <AppstoreTwoTone />,
        roles: [constants.roles.ROLE_SUPER_ADMIN],
    },
    {
        key: "/banner",
        label: "Баннеры",
        icon: <PictureTwoTone />,
        roles: [constants.roles.ROLE_SUPER_ADMIN],
    },
    {
        key: "/category",
        label: "Категории",
        icon: <CalendarTwoTone />,
        roles: [constants.roles.ROLE_SUPER_ADMIN],
    },
    {
        key: "/post",
        label: "Пост",
        icon: <PlusCircleTwoTone />,
        roles: [constants.roles.ROLE_SUPER_ADMIN],
    },
    {
        key: "/orders",
        label: "Заказы",
        icon: <FolderOpenTwoTone />,
        roles: [constants.roles.ROLE_SUPER_ADMIN],
    },
    {
        key: "/tariff",
        label: "Тарифы",
        icon: <PoundCircleTwoTone />,
        roles: [constants.roles.ROLE_SUPER_ADMIN],
    },
];

export default menus;
