import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="sidenav">
      <Link to="/">Home</Link>
      <Link to="/create">Create a Crewmate!</Link>
      <Link to="/gallery">Crewmate Gallery</Link>
      
      <Outlet />
    </div>
  );
};

export default Layout;