import { useState, useEffect } from "react";
import Button from "../Components/Button";
import GoBackButton from "../Components/GoBackButton";
// import Filter from "../Components/Filtter";

export default function ShowAllCategory({ category, serverLink }) {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        fetch(`${serverLink}${category}`)
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
            <GoBackButton></GoBackButton>
            {/* <Filter></Filter> */}
            <h1>{category.toLowerCase()}</h1>
            {category == "projection" ? console.log(allCategory) : ""}
            {allCategory.length > 0 && allCategory.map((item) => (
                <Button
                    key={item._id}
                    text={item.Name || item.Movie.Name}
                    fullLink={`/${category}/${item._id}`}
                />
            ))}
        </div>
    );
}
