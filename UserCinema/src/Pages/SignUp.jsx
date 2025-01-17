import UserForm from '../Components/userForm.jsx';
import { feildData } from '../feildData.js';
import { FormProvider } from '../Contexts/FormContext.jsx';
import SubmitButton from '../Components/SubmitButton.jsx';

export default function Signup({ serverLink }) {

    return (
        <FormProvider DataFields={feildData.signup}>
            <div className="signup-page">
                {/* <Logo></Logo> */}
                <UserForm data={feildData.signup} text={"SignUp"} />
                <SubmitButton serverLink={serverLink + "/signup"} />
            </div>
        </FormProvider>
    );
}