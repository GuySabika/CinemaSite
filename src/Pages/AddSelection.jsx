import Button from "../Components/Button.jsx";

export default function AddSelection({ style }) {
  const options = ["Movie", "Actor", "Projection"];
  return (
    <div className={`add-selection ${style}`}>
      {options.map((option, index) => (
        <Button key={index} text={option} />
      ))}
    </div>
  );
}
