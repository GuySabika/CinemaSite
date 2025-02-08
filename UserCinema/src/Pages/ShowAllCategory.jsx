import { useState, useEffect } from "react";
import Button from "../Components/Button";
import GoBackButton from "../Components/GoBackButton";
import Filter from "../Components/Filtter.jsx";

export default function ShowAllCategory({ category, serverLink }) {
    const [allCategory, setAllCategory] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {

        fetch(`${serverLink}${category}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setAllCategory(data);
                setFilteredData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [category, serverLink]);

    const handleFilterChange = (filters) => {
        console.log("handleFilterChange");
        console.log(category);
        console.log(filters);

        let filtered = [...allCategory];

        if (category === "movie") {
            if (filters.name) {
                filtered = filtered.filter((item) =>
                    item.Name.toLowerCase().includes(filters.name.toLowerCase())
                );
            }
            if (filters.releaseDate) {
                filtered = filtered.filter((item) =>
                    item.ReleaseDate.includes(filters.releaseDate)
                );
            }
            if (filters.ageRestriction) {
                filtered = filtered.filter((item) => {
                    const age = item.AgeRestriction;
                    const [minAge, maxAge] = filters.ageRestriction
                        .split("-")
                        .map(Number);

                    if (filters.ageRestriction === "18+") {
                        return age >= 18;
                    } else {
                        return age >= minAge && age <= maxAge;
                    }
                });
            }
        }

        else if (category === "actor") {
            if (filters.actorName) {
                filtered = filtered.filter((item) =>
                    item.Name.toLowerCase().includes(filters.actorName.toLowerCase())
                );
            }
            if (filters.genre) {
                filtered = filtered.filter((item) =>
                    item.Genre.toLowerCase().includes(filters.genre.toLowerCase())
                );
            }
            const fetchActorsByMovie = async (movieId) => {
                try {
                    const response = await fetch(`http://10.69.1.121:3000/actor/get/filterbymovie?movieId=${movieId}`);

                    if (!response.ok) {
                        throw new Error("Failed to fetch actors");
                    }

                    const data = await response.json();
                    console.log("Filtered Actors:", data);
                    return data;
                } catch (error) {
                    console.error("Error fetching actors by movie:", error);
                    return [];
                }
            };
            if (filters.movie) {
                fetchActorsByMovie(filters.movie).then((filteredActors) => {
                    console.log(filteredActors[0].actors)
                    setFilteredData(filteredActors[0].actors);
                });
            }
        }

        else if (category === "projection") {
            if (filters.priceAbove) {
                filtered = filtered.filter(
                    (item) => item.Price >= parseFloat(filters.priceAbove)
                );
            }
            if (filters.priceLess) {
                filtered = filtered.filter(
                    (item) => item.Price <= parseFloat(filters.priceLess)
                );
            }
            if (filters.priceEqual) {
                filtered = filtered.filter(
                    (item) => item.Price === parseFloat(filters.priceEqual)
                );
            }
            if (filters.hour) {
                filtered = filtered.filter((item) =>
                    item.StartingAt.includes(filters.hour)
                );
            }
            if (filters.date) {
                filtered = filtered.filter((item) =>
                    item.Date.includes(filters.date)
                );
            }
        }

        setFilteredData(filtered);
    };
    const fetchCategory = category === "actor" ? "movie" : category;

    return (
        <div>
            <GoBackButton />
            <Filter
                category={category}
                onFilterChange={handleFilterChange}
                data={fetch(`${serverLink}${fetchCategory}`).then((response) => { return response.json() })}
            />
            <h1>{category.toLowerCase()}</h1>
            {filteredData.map((item) => (
                <Button
                    key={item._id}
                    text={item.Name || item.Movie.Name}
                    fullLink={`/${category}/${item._id}`}
                />
            ))}
        </div>
    );
}