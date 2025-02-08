export default function FilterSelect({ options, defaultLabel, onChange }) {
    return (
        <select className="filter-select" onChange={(e) => onChange(e.target.value)}>
            <option value="">{defaultLabel}</option>
            {options.map((option) =>
                typeof option === "object" ? (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ) : (
                    <option key={option} value={option}>{option}</option>
                )
            )}
        </select>
    );
}
