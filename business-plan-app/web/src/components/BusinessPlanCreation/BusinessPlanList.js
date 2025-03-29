import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BusinessPlanList = () => {
    const [businessPlans, setBusinessPlans] = useState([]);

    useEffect(() => {
        const fetchBusinessPlans = async () => {
            try {
                const response = await axios.get('/api/business-plans');
                setBusinessPlans(response.data);
            } catch (error) {
                console.error('Error fetching business plans', error);
            }
        };

        fetchBusinessPlans();
    }, []);

    return (
        <div>
            <h2>Business Plans</h2>
            <ul>
                {businessPlans.map((plan) => (
                    <li key={plan.id}>{plan.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BusinessPlanList;