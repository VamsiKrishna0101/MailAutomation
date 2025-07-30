import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Builder from './components/Pages/Builder';
import Home from './components/Pages/Home';
import Login from './components/Common/Login';
import Register from './components/Common/Register';
import About from './components/Common/About';
import AddCampaignForm from './components/Common/AddCampaign';
import Profile from './components/Common/Profile';
const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-[Inter]">
      {/* Global Header */}
      <Header />

      {/* Main Routes */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/about" element={<About />} />
          <Route path='/addcampaign' element={<AddCampaignForm/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
