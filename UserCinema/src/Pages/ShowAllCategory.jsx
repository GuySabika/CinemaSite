import { useState, useEffect } from "react";
import Button from "../Components/Button";
import GoBackButton from "../Components/GoBackButton";
import Filter from "../Components/Filtter.jsx";
import { useLoginUserContext } from '../Contexts/LoginUserContext.jsx';
import { useNavigate } from 'react-router';

export default function ShowAllCategory({ category, serverLink }) {
    const [allCategory, setAllCategory] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const userId = useLoginUserContext();
    let navigate = useNavigate();

    useEffect(() => {
        if (userId === null || userId === undefined) {
            navigate('/login');
        }
        fetch(`${serverLink}${category}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAllCategory(data);
                setFilteredData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [category, serverLink]);

    const handleFilterChange = (filters) => {
        // console.log(category)
        // console.log(filters)
        let filtered = [...allCategory];

        // Apply filters based on category
        if (category === 'movie') {
            /* 
                if(filters[x]){
                filtered = filtered/filter(item => item[x].includes(filters[x]))}
            */

            if (filters.name) {
                filtered = filtered.filter(item =>
                    item.Name.toLowerCase().includes(filters.name.toLowerCase())
                );
            }
            if (filters.releaseDate) {
                filtered = filtered.filter(item =>
                    item.ReleaseDate.includes(filters.releaseDate)
                );
            }
            if (filters.ageRestriction) {
                filtered = filtered.filter(item =>
                    item.AgeRestriction === filters.ageRestriction
                );
            }
        }
        // Add similar filter logic for other categories
        else if (category === 'actor') {
            if (filters.actorName) {
                filtered = filtered.filter(item =>
                    item.Name.toLowerCase().includes(filters.actorName.toLowerCase())
                );
            }
            if (filters.genre) {
                filtered = filtered.filter(item =>
                    item.Genre.toLowerCase().includes(filters.genre.toLowerCase())
                );
            }
            if (filters.age) {
                filtered = filtered.filter(item =>
                    item.Age >= parseFloat(filters.age)
                );
            }
            // Add other actor filters
        }
        else if (category === 'ticket') {
            if (filters.priceAbove) {
                filtered = filtered.filter(item =>
                    item.Price >= parseFloat(filters.priceAbove)
                );
            }
            if (filters.priceLess) {
                filtered = filtered.filter(item =>
                    item.Price <= parseFloat(filters.priceLess)
                );
            }
            // Add other ticket filters
        }

        setFilteredData(filtered);
    };

    return (
        <div>
            <GoBackButton />
            <Filter
                category={category}
                serverLink={serverLink}
                onFilterChange={handleFilterChange}
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
