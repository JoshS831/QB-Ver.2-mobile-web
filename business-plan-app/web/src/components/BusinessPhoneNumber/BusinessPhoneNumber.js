import React, { useState } from 'react';

const BusinessPhoneNumber = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        extension: ''
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
            <h2>Business Phone Number</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Phone Number:
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Extension:
                        <input type="text" name="extension" value={formData.extension} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BusinessPhoneNumber;