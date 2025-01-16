// components/AddCategory.jsx
import { FormProvider } from '../Contexts/FormContext.jsx';
import FormFields from '../Components/FormFields.jsx';
import SubmitButton from "../Components/SubmitButton.jsx";

export default function AddCategory({ DataFields, category }) {
    const url = "http://10.47.96.117:3000/";

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <FormProvider DataFields={DataFields}>
            <div className="form-container">
                <h3 className="category-title">Add {category}</h3>
                <form onSubmit={handleSubmit}>
                    <FormFields DataFields={DataFields} url={url} />
                    <SubmitButton
                        serverLink={url + `${category}`}
                    />
                </form>
            </div>
        </FormProvider>
    );
}
