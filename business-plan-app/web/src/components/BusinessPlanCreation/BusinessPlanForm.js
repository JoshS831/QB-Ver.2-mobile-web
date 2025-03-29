import React, { useState } from 'react';

const BusinessPlanForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        goals: ''
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
            <h2>Create Business Plan</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <textarea name="description" value={formData.description} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Goals:
                        <textarea name="goals" value={formData.goals} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BusinessPlanForm;