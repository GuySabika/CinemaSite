import { NavLink } from "react-router-dom"; // Corrected import
import { lowerCase } from "lodash";

export default function Button({ text = "", fullLink = "" }) {
  const linkPath = fullLink || lowerCase(text);

  return (
    <NavLink to={`${linkPath}`} className="button-link">
      <button className="homepage">{text}</button>
    </NavLink>
  );
}
