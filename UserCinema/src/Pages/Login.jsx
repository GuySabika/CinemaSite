import UserForm from '../Components/userForm.jsx';
import { feildData } from '../feildData.js';
import { FormProvider } from '../Contexts/FormContext.jsx';
import SubmitButton from '../Components/SubmitButton.jsx';

export default function Login({ serverLink }) {

    return (
        <FormProvider DataFields={feildData.loging}>
            <div className="login-page">
                {/* <Logo></Logo> */}
                <UserForm data={feildData.loging} text={"Login"} />
                <SubmitButton serverLink={serverLink + "/login"} />
            </div>
        </FormProvider>
    );
}