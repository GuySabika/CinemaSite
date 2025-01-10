export default function InputField({ fieldName }) {
    return (
        <div className="input-field">
            <label className="input-label">{fieldName}</label>
            <input
                type="text"
                className="input-box"
                placeholder={`Enter ${fieldName.toLowerCase()}`}
            />
        </div>
    );
}
