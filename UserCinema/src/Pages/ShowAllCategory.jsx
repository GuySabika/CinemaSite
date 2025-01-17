import { useState, useEffect } from "react";
import Button from "../Components/Button";

export default function ShowAllCategory({ category, serverLink }) {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        fetch(`${serverLink}/${category}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setAllCategory(data))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [category, serverLink]);

    return (
        <div>
            <h1>{category.toLowerCase()}</h1>
            {console.log(allCategory)}
            {allCategory.length > 0 && allCategory.map((item) => (
                <Button
                    key={item._id}
                    fullLink={`/${category}/${item._id}`} // Direct path to movie/<id>
                />
            ))}
        </div>
    );
}
