import { useEffect } from "react";
import Button from "../Components/Button.jsx";
import { useLoginUserContext } from '../Contexts/LoginUserContext.jsx';
import { useNavigate } from "react-router";
export default function UserHomePage() {
    const userId = useLoginUserContext();
    let navigate = useNavigate();

    useEffect(() => {
        // console.log(userId);
        if (!userId) {
            navigate('/login');
        }
    }, []);
    return (
        <div>
            <h1>Welcome to the User Home Page</h1>
            <Button text="Movie" />
            <Button text="Actor" />
            <Button text="Projection" />
        </div>
    );
}