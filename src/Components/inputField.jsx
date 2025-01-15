export default function InputField({ fieldName, value, onChange, type }) {
    return (
        <div className="input-field">
            <label className="input-label">{fieldName}</label>
            <input
                type={type}
                className="input-box"
                placeholder={`Enter ${fieldName.toLowerCase()}`}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}
