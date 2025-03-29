import React, { useState } from 'react';

const VendorCredit = () => {
    const [formData, setFormData] = useState({
        vendorName: '',
        creditAmount: '',
        terms: ''
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
            <h2>Vendor Credit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Vendor Name:
                        <input type="text" name="vendorName" value={formData.vendorName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Credit Amount:
                        <input type="text" name="creditAmount" value={formData.creditAmount} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Terms:
                        <textarea name="terms" value={formData.terms} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VendorCredit;