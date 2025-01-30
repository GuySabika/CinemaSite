import { useEffect, useState } from "react";


export default function ShowField({ fieldName, element, serverLink = "" }) {
    // console.log(fieldName, element);
    const [field, setField] = useState([]);
    // console.log("setField", field);
    useEffect(() => {
        fetch(`${serverLink}movie/get/filterbyactor?actorId=${element._id}`).then(async response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const field = await response.json();
            setField(field);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);
    return (
        <div key={fieldName}>
            <h3>{fieldName}:</h3>
            <div>
                {fieldName !== "Movies act in" ? element[fieldName].map((movie, index) => (
                    <p key={index}>{movie.Name}</p>
                )) : field.map((movie, index) => (
                    <p key={index}>{movie.Name}</p>))}
            </div>
        </div>
    );
}