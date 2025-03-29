import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BusinessPlanForm, BusinessPlanList } from './components/BusinessPlanCreation';
import LegalBusinessFormation from './components/LegalBusinessFormation/LegalBusinessFormation';
import EINNumber from './components/EINNumber/EINNumber';
import BusinessBanking from './components/BusinessBanking/BusinessBanking';
import VirtualOffice from './components/VirtualOffice/VirtualOffice';
import BusinessPhoneNumber from './components/BusinessPhoneNumber/BusinessPhoneNumber';
import BusinessWebsite from './components/BusinessWebsite/BusinessWebsite';
import DunsNumber from './components/DunsNumber/DunsNumber';
import VendorCredit from './components/VendorCredit/VendorCredit';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Business Plan Application</h1>
                <Routes>
                    <Route path="/create-business-plan" element={<BusinessPlanForm />} />
                    <Route path="/business-plans" element={<BusinessPlanList />} />
                    <Route path="/legal-business-formation" element={<LegalBusinessFormation />} />
                    <Route path="/ein-number" element={<EINNumber />} />
                    <Route path="/business-banking" element={<BusinessBanking />} />
                    <Route path="/virtual-office" element={<VirtualOffice />} />
                    <Route path="/business-phone-number" element={<BusinessPhoneNumber />} />
                    <Route path="/business-website" element={<BusinessWebsite />} />
                    <Route path="/duns-number" element={<DunsNumber />} />
                    <Route path="/vendor-credit" element={<VendorCredit />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;