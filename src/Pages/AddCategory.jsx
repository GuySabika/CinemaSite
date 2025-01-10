import InputField from "../Components/InputField";

export default function AddCategory({ DataFields, category }) {
    return (
        <div className="form-container">
            <h3 className="category-title">Add {category}</h3>
            <form>
                {DataFields.feilds.map((field, index) => (
                    <InputField key={index} fieldName={field} />
                ))}
                <button className={`button`}>Submit</button>
            </form>
        </div>
    );
}
