export default function InputField({ fieldName, type = "text" }) {
    return (
        <div className="input-field">
            <label className="input-label">{fieldName}</label>
            <input
                type={type}
                className="input-box"
                placeholder={`Enter ${fieldName.toLowerCase()}`}
            />
        </div>
    );
}
