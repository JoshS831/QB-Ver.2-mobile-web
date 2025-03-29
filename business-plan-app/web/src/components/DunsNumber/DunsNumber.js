import React, { useState } from 'react';

const DunsNumber = () => {
    const [formData, setFormData] = useState({
        dunsNumber: '',
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
            <h2>Apply for DUNS Number</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Business Name:
                        <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        DUNS Number:
                        <input type="text" name="dunsNumber" value={formData.dunsNumber} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DunsNumber;