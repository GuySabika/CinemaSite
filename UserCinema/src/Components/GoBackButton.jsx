import { NavLink } from "react-router-dom";

export default function GoBackButton() {
    return (
        <NavLink to={-1} className="go-back-button">
            <button className="go-back">Go Back</button>
        </NavLink>
    );
}
