export default function selectField({ options, filedName }) {
    return (
        <div>
            <label>{filedName}</label>
            <select value={`enter a ${filedName}`}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}
