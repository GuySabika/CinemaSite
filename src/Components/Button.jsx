import { NavLink } from "react-router";

export default function Button({ text }) {
  return (
    <div>
      <NavLink to={`/add/${text}`}>{text}</NavLink>
    </div>
  );
}
