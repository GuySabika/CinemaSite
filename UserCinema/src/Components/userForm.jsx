import { useState } from 'react';
import InputField from './inputField.jsx';
import { useFormContext } from '../Contexts/FormContext.jsx';

export default function UserForm({ data, text }) {
    const { inputValues, setInputValues, validateFields } = useFormContext();
    const [error, setError] = useState('');

    const handleChange = (fieldName, value) => {
        setInputValues(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            // Perform login logic here
            // console.log('Form Values:', inputValues);
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div className="login-form-container">
            <h2>{text}</h2>
            <form onSubmit={handleSubmit}>
                {data.feildsInput.map((field, index) => (
                    <InputField
                        key={index}
                        fieldName={field.name}
                        type={field.type}
                        value={inputValues[field.name]}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                ))}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}