import React from 'react';
import { BusinessPlanForm, BusinessPlanList } from './components/BusinessPlanCreation';
// Import other components as needed
import './styles.css';

const App = () => {
    return (
        <div>
            <h1>Business Plan Application</h1>
            <BusinessPlanForm />
            <BusinessPlanList />
            {/* Render other components as needed */}
        </div>
    );
};

export default App;