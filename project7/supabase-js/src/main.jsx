import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Layout from "./routes/Layout.jsx";
import CreateCrewmate from "./Components/CreateCrewmate.jsx";
import Gallery from "./Components/Gallery.jsx";
import CrewmateInfo from "./Components/CrewmateInfo.jsx";
import EditCrewmate from "./Components/EditCrewmate.jsx";

const Navbar = () => (
  <div className="sidenav">
    <Link to="/">Home</Link>
    <Link to="/create">Create a Crewmate!</Link>
    <Link to="/gallery">Crewmate Gallery</Link>
  </div>
);

const LayoutWithNavbar = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWithNavbar />}>
          <Route index element={<App />} />
          <Route path="create" element={<CreateCrewmate />} />
          <Route path = "gallery" element = {<Gallery />} />
          <Route path = ":title" element = {<CrewmateInfo />} />
          <Route path = ":title/edit" element = {<EditCrewmate />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
                <Link to="/">Back to Home</Link>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);