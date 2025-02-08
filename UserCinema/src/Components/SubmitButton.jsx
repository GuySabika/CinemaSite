import { useState } from 'react';
import Message from './Message';
import { useFormContext } from '../Contexts/FormContext.jsx';
import { useNavigate } from 'react-router';
import { useSetLoginUserContext } from '../Contexts/LoginUserContext.jsx';

export default function SubmitButton({ serverLink }) {
    const [message, setMessage] = useState({ type: '', content: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { inputValues, selectValues, isFormValid, validateFields } = useFormContext();
    const setUserId = useSetLoginUserContext();
    let navigate = useNavigate();

    const postData = async () => {
        setIsSubmitting(true);
        setMessage({ type: '', content: '' });
        // console.log(serverLink)
        try {
            const response = await fetch(serverLink.toLowerCase(), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...inputValues, ...selectValues })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            if (data.isMatch || data.userId) {
                setUserId(data.userId);
                navigate('/homepage');
            }
            else {
                setMessage({ type: 'error', content: 'Incorrect inputs' });
            }
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
