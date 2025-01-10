import Button from "../Components/Button.jsx";

export default function selectCategory({ style }) {
  const options = ["Movie", "Actor", "User", "Projection", "Ticket"];
  return (
    <div className={style}>
      {options.map((option, index) => (
        <Button key={index} text={option} />
      ))}
    </div>
  );
}
