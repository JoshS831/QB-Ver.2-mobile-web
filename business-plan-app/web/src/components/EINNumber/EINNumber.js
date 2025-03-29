import React, { useState } from 'react';

const EINNumber = () => {
    const [formData, setFormData] = useState({
        ein: '',
        businessName: ''
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
            <h2>Apply for EIN Number</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Business Name:
                        <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        EIN:
                        <input type="text" name="ein" value={formData.ein} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EINNumber;