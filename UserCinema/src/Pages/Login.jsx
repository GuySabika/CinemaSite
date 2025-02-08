import UserForm from '../Components/userForm.jsx';
import { feildData } from '../feildData.js';
import { FormProvider } from '../Contexts/FormContext.jsx';
import SubmitButton from '../Components/SubmitButton.jsx';
import { NavLink } from 'react-router-dom';
// import { useFormContext } from '../Contexts/FormContext.jsx';


export default function Login({ serverLink }) {
    // const { inputValues } = useFormContext();

    return (
        <FormProvider DataFields={feildData.loging}>
            <div className="login-page">
                {/* <Logo></Logo> */}
                <UserForm data={feildData.loging} text={"Login"} />
                <SubmitButton serverLink={serverLink + "user/login"} />
                <p>
                    Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
                </p>
            </div>
        </FormProvider>
    );
}