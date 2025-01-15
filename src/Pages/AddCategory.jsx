import { useState } from 'react';
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import SubmitButton from "../Components/SubmitButton";

export default function AddCategory({ DataFields, category }) {
    const url = "http://10.70.2.8:3000/";
    const [inputValues, setInputValues] = useState({});
    const [selectValues, setSelectValues] = useState({});

    const handleInputChange = (fieldName, value) => {
        setInputValues(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSelectChange = (fieldName, value) => {
        setSelectValues(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const combinedData = { ...inputValues, ...selectValues };
        console.log('Combined Data:', combinedData);
        // You can now send the data to the server or perform other actions
    };

    return (
        <div className="form-container">
            <h3 className="category-title">Add {category}</h3>
            <form onSubmit={handleSubmit}>
                {DataFields.feildsInput.length > 0 && DataFields.feildsInput.map((field, index) => (
                    <InputField
                        key={index}
                        fieldName={field}
                        value={inputValues[field] || ''}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                ))}
                {DataFields.fieldSelect.length > 0 && DataFields.fieldSelect.map((field, index) => (
                    <SelectField
                        key={index}
                        fieldName={field}
                        serverLink={url}
                        value={selectValues[field] || ''}
                        onChange={(e) => handleSelectChange(field, e.target.value)}
                    />
                ))}
                <SubmitButton serverLink={url + `${category}`} data={{ ...inputValues, ...selectValues }} />
            </form>
        </div>
    );
}
