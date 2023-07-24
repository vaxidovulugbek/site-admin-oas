import constants from "helpers/constants";
const { auth } = constants;

const loginAction = (data: object) => ({ type: auth.LOGIN, data });

const logoutAction = () => ({ type: auth.LOGOUT });

const authActions = { loginAction, logoutAction };

export default authActions;
