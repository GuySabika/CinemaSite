import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { elementData } from "../feildData.js";
import GoBackButton from "../Components/GoBackButton";

export default function ShowElement({ category, serverLink }) {
    const [element, setElement] = useState(null);
    const { id } = useParams();

    useEffect(() => {
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

        // Special handling for Actor field
        if (fieldName === "Actor" && Array.isArray(value)) {
            return (
                <div key={fieldName}>
                    <h3>{fieldName}:</h3>
                    <div>
                        {value.map((actor, index) => (
                            <p key={index}>{actor.Name}</p>
                        ))}
                    </div>
                </div>
            );
        }

        // Default handling for other fields
        return (
            <div key={fieldName}>
                <h3>{fieldName}:</h3>
                <p>{Array.isArray(value) ? value.join(', ') : value}</p>
            </div>
        );
    };

    return (
        <div>
            <GoBackButton></GoBackButton>
            <h1>{element.Name}</h1>
            {elementData[category.toLowerCase()]?.show.map((fieldName) =>
                renderField(fieldName)
            )}
        </div>
    );
}