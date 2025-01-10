import InputField from "../Components/InputField";
import SelectField from "../Components/selectField.jsx";

export default function AddCategory({ DataFields, category }) {
    return (
        <div className="form-container">
            <h3 className="category-title">Add {category}</h3>
            <form>
                {DataFields.feildsInput.length > 0 ? DataFields.feildsInput.map((field, index) => (
                    <InputField key={index} fieldName={field} />
                )) : <></>}
                {DataFields.fieldSelect.length > 0 ? DataFields.fieldSelect.map((field, index) => (
                    < SelectField key={index} fieldName={field} />
                )) : <></>}
                <button className={`button`}>Submit</button>
            </form>
        </div>
    );
}
