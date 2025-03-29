import React, { useState } from 'react';

const LegalBusinessFormation = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        entityType: '',
        state: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div>
            <h2>Legal Business Formation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Business Name:
                        <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Entity Type:
                        <select name="entityType" value={formData.entityType} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="LLC">LLC</option>
                            <option value="Corporation">Corporation</option>
                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        State:
                        <input type="text" name="state" value={formData.state} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LegalBusinessFormation;