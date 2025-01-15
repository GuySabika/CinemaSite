import { useState, useEffect } from 'react';

export default function SelectField({ fieldName, serverLink, value, onChange, isMultiple }) {
    const [selections, setSelections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSelections = async () => {
            try {
                const response = await fetch((serverLink + fieldName).toLowerCase());
                if (!response.ok) throw new Error('Failed to fetch selections');
                const data = await response.json();
                setSelections(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSelections();
    }, [fieldName, serverLink]);

    const handleChange = (event) => {
        if (isMultiple) {
            // For multiple selections
            const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
            onChange(fieldName, selectedOptions);
        } else {
            // For single selection
            onChange(fieldName, event.target.value);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="input-field">
            <label className="input-label">{fieldName}</label>
            <select
                className="input-box"
                value={isMultiple ? (Array.isArray(value) ? value : []) : (value || '')}
                onChange={handleChange}
                multiple={isMultiple}
                required
            >
                <option value="">Select {fieldName}</option>
                {selections.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.Name || item.Movie.Name}
                    </option>
                ))}
            </select>
        </div>
    );
}
