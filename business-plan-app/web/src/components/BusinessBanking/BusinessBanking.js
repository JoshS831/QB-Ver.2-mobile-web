import React, { useState } from 'react';

const BusinessBanking = () => {
    const [formData, setFormData] = useState({
        accountName: '',
        bankName: '',
        accountNumber: ''
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
            <h2>Business Banking</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Account Name:
                        <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Bank Name:
                        <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Account Number:
                        <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BusinessBanking;