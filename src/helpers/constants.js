const auth = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

const ROLE_SUPER_ADMIN = 10;

const roles = {
    ROLE_SUPER_ADMIN,
};

const rolesLabel = [
    {
        label: "SUPER ADMIN",
        value: roles.ROLE_SUPER_ADMIN,
    },
];

const orderStatus = [
    {
        label: "Оплачено",
        value: 2,
    },
    {
        label: "Не оплачено",
        value: 1,
    },
];

const constants = { auth, roles, rolesLabel, orderStatus };

export default constants;
