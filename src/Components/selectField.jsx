import { useState, useEffect } from 'react';

export default function SelectField({ fieldName, serverLink, value, onChange }) {
    const [selections, setSelections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const elementById = async (id) => {
        try {
            const response = await fetch((serverLink + fieldName).toLowerCase() + `/${id}`);
            if (!response.ok) throw new Error('Failed to fetch selection');
            const data = await response.json();
            return data.Movie.Name;
        } catch (err) {
            setError(err.message);
        }
    }
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="input-field">
            <label className="input-label">{fieldName}</label>
            <select className="input-box" value={value} onChange={onChange}>
                <option value="">Select {fieldName}</option>
                {selections.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.Name || "" + elementById(item._id)}
                    </option>
                ))}
            </select>
        </div>
    );
}
