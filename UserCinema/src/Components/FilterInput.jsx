export default function FilterInput({ type, placeholder, onChange }) {
    return (
        <input
            className="filter-input"
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
