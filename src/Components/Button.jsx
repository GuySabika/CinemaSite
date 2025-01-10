import { NavLink } from "react-router";
import { lowerCase } from "lodash";

export default function Button({ text, className }) {
  return (
    <NavLink to={`/add/${lowerCase(text)}`} className="button-link">
      <button
        className={`button ${className || ""}`}
      >{text}</button>
    </NavLink>
  );
}
