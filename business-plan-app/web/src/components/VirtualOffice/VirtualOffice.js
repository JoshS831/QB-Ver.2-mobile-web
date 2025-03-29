import React, { useState } from 'react';

const VirtualOffice = () => {
    const [formData, setFormData] = useState({
        officeName: '',
        address: '',
        phoneNumber: ''
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
            <h2>Virtual Office</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Office Name:
                        <input type="text" name="officeName" value={formData.officeName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Address:
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VirtualOffice;