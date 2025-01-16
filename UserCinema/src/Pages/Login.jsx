import LoginForm from '../Components/LoginForm';
import feildData from '../feildData';
import { FormProvider } from '../Contexts/FormContext.jsx';
import SubmitButton from '../Components/SubmitButton.jsx';

export default function Login() {
    const url = "http://10.47.96.117:3000/";

    return (
        <FormProvider DataFields={feildData.loging}>
            <div className="login-page">
                <LoginForm data={feildData.loging} />
                <SubmitButton serverLink={url + "/login"} />
            </div>
        </FormProvider>
    );
}