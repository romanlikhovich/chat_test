import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const render = (children, token) => {
    return token ? children : <Redirect to='/login'/>
}
export const PrivateRoute = ({children, ...rest}) => {
    const {token} = useSelector(
        (state) => state
    );
    return (
        <Route {...rest} render={render.bind(null, children, token)}/>
    );
}
