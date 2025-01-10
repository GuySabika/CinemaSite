import { useState, useEffect } from 'react';

export default function SelectField({ fieldName }) {
    const [selections, setSelections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSelections = async () => {
            try {
                const response = await fetch(`http://192.168.1.242:8080/${fieldName.toLowerCase()}`);
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
    }, [fieldName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="input-field">
            <label className="input-label">{fieldName}</label>
            <select className="input-box">
                <option value="">Select {fieldName}</option>
                {selections.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.name || item.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
