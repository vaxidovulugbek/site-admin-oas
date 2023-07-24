import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "actions";
import { useFetchOne } from "hooks";
import { AuthorizedRoutes, UnAuthorizedRoutes } from "routes";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state: any) => state.auth);

    const responseUser: any = useFetchOne({
        url: "/user/get-me",
        refetchStatus: false,
        queryOptions: {
            onSuccess: (user: any) => {
                dispatch(authActions.loginAction(user));
            },
            onError: () => {
                dispatch(authActions.logoutAction());
                navigate("/login");
            },
        },
    });

    useEffect(() => {
        if (!user.token) {
            console.log(responseUser);

            // responseUser.refetch();
        }
    }, []);

    return user.token ? (
        <AuthorizedRoutes user={user} />
    ) : (
        <UnAuthorizedRoutes />
    );
}
export default App;
