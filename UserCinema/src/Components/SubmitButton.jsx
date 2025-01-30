import { useState } from 'react';
import Message from './Message';
import { useFormContext } from '../Contexts/FormContext.jsx';

export default function SubmitButton({ serverLink }) {
    const [message, setMessage] = useState({ type: '', content: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { inputValues, selectValues, isFormValid, validateFields } = useFormContext();

    const postData = async () => {
        setIsSubmitting(true);
        setMessage({ type: '', content: '' });
        console.log(serverLink)
        try {
            const response = await fetch(serverLink.toLowerCase(), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...inputValues, ...selectValues })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response)

            setMessage({ type: 'success', content: 'Data submitted successfully!' });
        } catch (error) {
            console.error('Error:', error);
            setMessage({ type: 'error', content: 'Error submitting data. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClick = () => {
        if (validateFields()) {
            postData();
        } else {
            setMessage({ type: 'error', content: 'Please fill in all required fields.' });
        }
    };

    return (
        <div className="submit-container">
            <button
                onClick={handleClick}
                className={`button ${!isFormValid ? 'button-disabled' : ''} ${isSubmitting ? 'button-loading' : ''}`}
                disabled={!isFormValid || isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <Message {...message} />
        </div>
    );
}
