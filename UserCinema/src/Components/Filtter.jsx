import { useState } from "react"
// import { filterData } from "../feildData";
// import './Filter.css'

export default function Filter({ category, onFilterChange }) {
    const [filterValues, setFilterValues] = useState({});
    const [data] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleFilterChange = (key, value) => {
        setFilterValues(prev => ({
            ...prev,
            [key]: value
        }));
        onFilterChange({ ...filterValues, [key]: value });
    };

    const renderMovieFilters = () => (
        <div className="filter-section">
            <input
                className="filter-input"
                type="text"
                placeholder="Movie name"
                onChange={(e) => handleFilterChange('name', e.target.value)}
            />
            <input
                className="filter-input"
                type="date"
                onChange={(e) => handleFilterChange('releasedate', e.target.value)}
            />
            <select
                className="filter-select"
                onChange={(e) => handleFilterChange('ageRestriction', e.target.value)}
            >
                <option value="">Select age restriction</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
            </select>
        </div>
    );

    const renderActorFilters = () => (
        <div className="filter-section">
            <input
                className="filter-input"
                type="text"
                placeholder="Actor name"
                onChange={(e) => handleFilterChange('actorName', e.target.value)}
            />
            <select
                className="filter-select"
                onChange={(e) => handleFilterChange('genre', e.target.value)}
            >
                <option value="">Select genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
            </select>
            <select
                className="filter-select"
                onChange={(e) => handleFilterChange('movie', e.target.value)}
            >
                <option value="">Select movie</option>
                {data.movies?.map(movie => (
                    <option key={movie.id} value={movie.id}>{movie.name}</option>
                ))}
            </select>
        </div>
    );

    const renderTicketFilters = () => (
        <div className="filter-section">
            <input
                className="filter-input"
                type="number"
                placeholder="Price above"
                onChange={(e) => handleFilterChange('priceAbove', e.target.value)}
            />
            <input
                className="filter-input"
                type="number"
                placeholder="Price below"
                onChange={(e) => handleFilterChange('priceLess', e.target.value)}
            />
            <input
                className="filter-input"
                type="number"
                placeholder="Exact price"
                onChange={(e) => handleFilterChange('priceEqual', e.target.value)}
            />
            <input
                className="filter-input"
                type="time"
                onChange={(e) => handleFilterChange('hour', e.target.value)}
            />
            <input
                className="filter-input"
                type="date"
                onChange={(e) => handleFilterChange('date', e.target.value)}
            />
        </div>
    );

    return (
        <div className="filter-container">
            <button
                className="toggle-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            {isOpen && (
                <div className="filter-dropdown">
                    {category === 'movie' && renderMovieFilters()}
                    {category === 'actor' && renderActorFilters()}
                    {category === 'ticket' && renderTicketFilters()}
                </div>
            )}
        </div>
    );
}
