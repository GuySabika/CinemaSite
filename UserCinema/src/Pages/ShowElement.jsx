import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { elementData } from "../feildData.js";
import GoBackButton from "../Components/GoBackButton";
import ShowField from "../Components/ShowField.jsx";
import { useLoginUserContext } from '../Contexts/LoginUserContext.jsx';
import { useNavigate } from "react-router";

export default function ShowElement({ category, serverLink }) {
    const [element, setElement] = useState(null);
    const { id } = useParams();
    const userId = useLoginUserContext();
    let navigate = useNavigate();

    useEffect(() => {
        if (userId === null || userId === undefined) {
            navigate('/login');
        }
        fetch(`${serverLink}${category}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setElement(data))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [category, serverLink, id]);


    if (!element) return <div>Loading...</div>;

    const renderField = (fieldName) => {
        const value = element[fieldName];
        // console.log(fieldName, element, value);
        // Special handling for Actor field
        if (fieldName === "Actor" && Array.isArray(value)) {
            return (
                <ShowField fieldName={fieldName} element={element}></ShowField>
            );
        }
        else if (fieldName === "Movie") {
            return (<></>);
        }
        else if (fieldName === "Movies act in" && Array.isArray(value)) {

            return (
                <ShowField fieldName={fieldName} element={element}></ShowField>
            );
        }
        else if (fieldName === "Movies act in") {
            return (
                <ShowField serverLink={serverLink} fieldName={fieldName} element={element}></ShowField>
            );
        }

        // Default handling for other fields
        else {
            return (
                <div key={fieldName}>
                    <h3>{fieldName}:</h3>
                    <p>{Array.isArray(value) ? value.join(', ') : value}</p>
                </div>
            );
        }
    };

    return (
        <div>
            <GoBackButton></GoBackButton>
            <h1>{element.Name || element.Movie.Name}</h1>
            {/* {console.log(element.Movie.Name)} */}
            {elementData[category.toLowerCase()]?.show.map((fieldName) =>
                renderField(fieldName)
            )}
        </div>
    );
}