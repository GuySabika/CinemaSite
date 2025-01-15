// contexts/FormContext.jsx
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFormContext() {
    return useContext(FormContext);
}

export function FormProvider({ children, DataFields }) {
    const [inputValues, setInputValues] = useState({});
    const [selectValues, setSelectValues] = useState({});
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};
        let isValid = true;

        DataFields.feildsInput.forEach(field => {
            if (!inputValues[field.name]?.trim()) {
                newErrors[field.name] = `${field.name} is required`;
                isValid = false;
            }
        });

        DataFields.fieldSelect.forEach(field => {
            if (DataFields.isMultiple) {
                if (!selectValues[field]?.length) {
                    newErrors[field] = `Please select at least one ${field}`;
                    isValid = false;
                }
            } else if (!selectValues[field]) {
                newErrors[field] = `Please select a ${field}`;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (fieldName, value) => {
        setInputValues(prev => ({ ...prev, [fieldName]: value }));
        if (errors[fieldName]) {
            setErrors(prev => ({ ...prev, [fieldName]: undefined }));
        }
    };

    const handleSelectChange = (fieldName, value) => {
        setSelectValues(prev => ({ ...prev, [fieldName]: value }));
        if (errors[fieldName]) {
            setErrors(prev => ({ ...prev, [fieldName]: undefined }));
        }
    };

    const isFormValid = Object.keys(errors).length === 0 &&
        DataFields.feildsInput.every(field => inputValues[field.name]) &&
        DataFields.fieldSelect.every(field =>
            DataFields.isMultiple
                ? selectValues[field]?.length > 0
                : selectValues[field]
        );

    const value = {
        inputValues,
        selectValues,
        errors,
        handleInputChange,
        handleSelectChange,
        validateFields,
        isFormValid
    };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}