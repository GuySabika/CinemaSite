// contexts/FormContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFormContext() {
    return useContext(FormContext);
}

export function FormProvider({ children, DataFields }) {
    const [inputValues, setInputValues] = useState(
        DataFields.feildsInput.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {})
    );
    const [selectValues, setSelectValues] = useState(
        DataFields.fieldSelect.reduce((acc, field) => {
            acc[field] = DataFields.isMultiple ? [] : "";
            return acc;
        }, {})
    );
    const [isFormValid, setIsFormValid] = useState(false);

    // Validate fields whenever input or select values change
    useEffect(() => {
        validateFields();
    }, [inputValues, selectValues]);
    let isValid = true;

    const validateFields = () => {
        const errors = {};

        // Check input fields
        for (const field of DataFields.feildsInput) {
            const value = inputValues[field.name]?.trim();

            // Check if empty
            if (!value) {
                errors[field.name] = `${field.name} is required`;
                isValid = false;
                continue;
            }

            // Check email format
            if (field.type === "email") {
                if (!validateEmail(value)) {
                    errors[field.name] = "Please enter a valid email address";
                    isValid = false;
                }
            }
        }

        // Check select fields
        for (const field of DataFields.fieldSelect) {
            if (DataFields.isMultiple) {
                if (!selectValues[field] || selectValues[field].length === 0) {
                    errors[field] = `Please select at least one ${field}`;
                    isValid = false;
                }
            } else {
                if (!selectValues[field]) {
                    errors[field] = `Please select a ${field}`;
                    isValid = false;
                }
            }
        }

        setIsFormValid(isValid);
        return isValid;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        return emailRegex.test(email);
    };

    // Check input fields with email validation
    for (const field of DataFields.feildsInput) {
        const value = inputValues[field.name]?.trim();

        // First check if field is empty
        if (!value) {
            isValid = false;
            break;
        }

        // Then check email format if it's an email field
        if (field.type === "email" && !validateEmail(value)) {
            isValid = false;
            break;
        }
    }

    const handleInputChange = (fieldName, value) => {
        setInputValues((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    const handleSelectChange = (fieldName, value) => {
        setSelectValues((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    return (
        <FormContext.Provider
            value={{
                inputValues,
                setInputValues,
                selectValues,
                setSelectValues,
                isFormValid,
                validateFields,
                handleInputChange,
                handleSelectChange,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}
