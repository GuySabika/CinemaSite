// components/FormFields.jsx
import { useFormContext } from '../Contexts/FormContext.jsx';
import InputField from "./inputField.jsx";
import SelectField from "./selectField.jsx";

export default function FormFields({ DataFields, url }) {
    const {
        inputValues,
        selectValues,
        errors,
        handleInputChange,
        handleSelectChange
    } = useFormContext();

    return (
        <>
            {console.log(DataFields.feildsInput)}
            {DataFields.feildsInput.length > 0 && DataFields.feildsInput.map((field, index) => (
                <div key={index}>
                    <InputField
                        fieldName={field.name}
                        value={inputValues[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        type={field.type}
                    />
                    {errors[field.name] && (
                        <div className="error-message">{errors[field.name]}</div>
                    )}
                </div>
            ))}
            {DataFields.fieldSelect.length > 0 && DataFields.fieldSelect.map((field, index) => (
                <div key={index}>
                    <SelectField
                        fieldName={field}
                        serverLink={url}
                        value={selectValues[field] || (DataFields.isMultiple ? [] : '')}
                        onChange={handleSelectChange}
                        isMultiple={DataFields.isMultiple}
                    />
                    {errors[field] && (
                        <div className="error-message">{errors[field]}</div>
                    )}
                </div>
            ))}
        </>
    );
}
