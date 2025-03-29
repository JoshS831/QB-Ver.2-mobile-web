import React, { useState } from 'react';

const BusinessWebsite = () => {
    const [formData, setFormData] = useState({
        domain: '',
        hostingProvider: '',
        websiteContent: ''
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
            <h2>Business Website</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Domain:
                        <input type="text" name="domain" value={formData.domain} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Hosting Provider:
                        <input type="text" name="hostingProvider" value={formData.hostingProvider} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Website Content:
                        <textarea name="websiteContent" value={formData.websiteContent} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BusinessWebsite;