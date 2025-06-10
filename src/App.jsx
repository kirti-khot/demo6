import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/coursespage" element={<CoursesPage/>}/>
          <Route path="/contactpage" element={<ContactPage/>}/>
          <Route path="/admissionpage" element={<AdmissionPage/>}/>
        </Routes>
      </Router>
    </div>
    
  )
}
export default App
