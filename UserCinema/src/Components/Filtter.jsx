import { useState, useEffect } from "react";
import FilterInput from "./FilterInput";
import FilterSelect from "./FilterSelect";

export default function Filter({ category, onFilterChange, data }) {
    const [filterValues, setFilterValues] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [resolvedData, setResolvedData] = useState(null);

    useEffect(() => {
        setFilterValues({});
        Promise.resolve(data).then(setResolvedData);
    }, [category, data]);

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filterValues, [key]: value };
        setFilterValues(newFilters);
        onFilterChange(newFilters);
    };

    const genres = [
        "Action", "Comedy", "Drama", "Crime", "Fantasy",
        "Horror", "Romance", "Science Fiction", "Sports",
        "Thriller", "Mystery", "War", "Western"
    ];

    const ageRestrictions = ["0-8", "9-13", "14-18", "18+"];

    const renderMovieFilters = () => (
        <div className="filter-section">
            <FilterInput type="text" placeholder="Movie name" onChange={(value) => handleFilterChange('name', value)} />
            <FilterInput type="date" onChange={(value) => handleFilterChange('releaseDate', value)} />
            <FilterSelect options={ageRestrictions} defaultLabel="Select age restriction" onChange={(value) => handleFilterChange('ageRestriction', value)} />
        </div>
    );

    const renderActorFilters = () => (
        <div className="filter-section">
            <FilterInput type="text" placeholder="Actor name" onChange={(value) => handleFilterChange('actorName', value)} />
            <FilterSelect options={genres} defaultLabel="Select genre" onChange={(value) => handleFilterChange('genre', value)} />
            <FilterSelect 
                options={resolvedData?.map(movie => ({ value: movie._id, label: movie.Name })) || []} 
                defaultLabel="Select movie" 
                onChange={(value) => handleFilterChange('movie', value)} 
            />
        </div>
    );

    const renderTicketFilters = () => (
        <div className="filter-section">
            <FilterInput type="number" placeholder="Price above" onChange={(value) => handleFilterChange('priceAbove', value)} />
            <FilterInput type="number" placeholder="Price below" onChange={(value) => handleFilterChange('priceLess', value)} />
            <FilterInput type="number" placeholder="Exact price" onChange={(value) => handleFilterChange('priceEqual', value)} />
            <FilterInput type="time" onChange={(value) => handleFilterChange('hour', value)} />
            <FilterInput type="date" onChange={(value) => handleFilterChange('date', value)} />
        </div>
    );

    return (
        <div className="filter-container">
            <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            {isOpen && (
                <div className="filter-dropdown">
                    {category === 'movie' && renderMovieFilters()}
                    {category === 'actor' && renderActorFilters()}
                    {category === 'projection' && renderTicketFilters()}
                </div>
            )}
        </div>
    );
}
