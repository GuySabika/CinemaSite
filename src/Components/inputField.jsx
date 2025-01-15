export default function InputField({ fieldName, value, onChange }) {
    return (
        <div className="input-field">
            <label className="input-label">{fieldName}</label>
            <input
                type="text"
                className="input-box"
                placeholder={`Enter ${fieldName.toLowerCase()}`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
