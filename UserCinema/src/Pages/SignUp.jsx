import UserForm from '../Components/userForm.jsx';
import { feildData } from '../feildData.js';
import { FormProvider } from '../Contexts/FormContext.jsx';
import SubmitButton from '../Components/SubmitButton.jsx';
import { NavLink } from 'react-router-dom';

export default function Signup({ serverLink }) {

    return (
        <FormProvider DataFields={feildData.signup}>
            <div className="signup-page">
                {/* <Logo></Logo> */}
                <UserForm data={feildData.signup} text={"SignUp"} />
                <SubmitButton serverLink={serverLink + "user"} />
                <p>
                    Already have an account? <NavLink to="/login">Login</NavLink>
                </p>
            </div>
        </FormProvider>
    );
}