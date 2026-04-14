import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { Home } from './pages/Home';
import { DestinationDetail } from './pages/DestinationDetail';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialDestination, setInitialDestination] = useState('');

  const handleOpenEnquiry = (destinationName = '') => {
    setInitialDestination(destinationName);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar onEnquire={handleOpenEnquiry} />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home onEnquire={handleOpenEnquiry} />} />
            <Route path="/destination/:slug" element={<DestinationDetail onEnquire={handleOpenEnquiry} />} />
          </Routes>
        </div>

        <Footer />
        
        <EnquiryModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          initialDestination={initialDestination} 
        />
      </div>
    </Router>
  );
}

export default App;
