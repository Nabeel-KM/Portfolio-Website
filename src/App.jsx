import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import UpworkProfile from './components/upwork/UpworkProfile';
import AwsArchitectureTemplates from './components/resources/AwsArchitectureTemplates';
import CiCdPipelineBlueprints from './components/resources/CiCdPipelineBlueprints';
import CloudCostOptimization from './components/resources/CloudCostOptimization';

const MainApp = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/upwork-profile" element={<UpworkProfile />} />
        <Route path="/resources/aws-architecture" element={<AwsArchitectureTemplates />} />
        <Route path="/resources/ci-cd-pipelines" element={<CiCdPipelineBlueprints />} />
        <Route path="/resources/cost-optimization" element={<CloudCostOptimization />} />
      </Routes>
    </Router>
  );
};

export default App;
