import "./HomeNav.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


// function HomeNav({theme}) {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div className="home-nav">
//       <input
//         type="checkbox"
//         id="nav-control"
//         className="nav-control"
//         checked={isNavOpen}
//         onChange={toggleNav}
//       />
//       <label htmlFor="nav-control" className="home-nav__toggle">
//         <div className="controller">
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           {/* <div className="slide"></div> */}
//         </div>
//       </label>

//       <nav className={`navigation ${isNavOpen ? 'active' : ''}`}>
//         <ul>
//           <h1>
//             <Link className="navigation-link" to="/homepage">
//               Home
//             </Link>
//           </h1>
//           <h1>
//             <Link className="navigation-link" to="/schedule">
//               Schedule
//             </Link>
//           </h1>
//           <h1>
//             <Link className="navigation-link" to="">
//               Stats
//             </Link>
//           </h1>
//           <h1>
//             <Link className="navigation-link" to="/tryouts">
//               Try out
//             </Link>
//           </h1>
//           <h1>
//             <Link className="navigation-link" to="">
//               Donate
//             </Link>
//           </h1>
//           <h1>
//             <Link className="navigation-link" to="/sponsor">
//               Sponsor
//             </Link>
//           </h1>
//           <h1>
//             <Link className="navigation-link" to="/admin">
//               Admin
//             </Link>
//           </h1>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default HomeNav;
// function HomeNav() {

//   return (
//     <div className="home-nav">
//       <input type="checkbox" id="nav-control" className="nav-control" />
//       <label htmlFor="nav-control" className="home-nav__toggle">
//         <div className="controller">
//           <div className="slide"></div>
//         </div>
//       </label>

//       <nav className="navigation">
//         <h1><Link className="navigation-link" to="/homepage">Home</Link></h1>
//         <h1>
//           <Link className="navigation-link" to="/schedule">
//             Schedule
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="">
//             Stats
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="/tryouts">
//             Try out
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="">
//             Donate
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="/sponsor">
//             Sponsor
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="/admin">
//             Admin
//           </Link>
//         </h1>
//       </nav>
//     </div>
//   );
// }

// export default HomeNav;


// -------------------

// function HomeNav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="home-nav">
//       <input type="checkbox" id="nav-control" className="nav-control" checked={isOpen} onChange={handleToggle} />
//       <label htmlFor="nav-control" className="home-nav__toggle">
//         <div className={isOpen ? 'controller open' : 'controller'}>
//           <div className="line line--1"></div>
//           <div className="line line--2"></div>
//           <div className="line line--3"></div>
//         </div>
//       </label>

//       <nav className={isOpen ? 'navigation open' : 'navigation'}>
//         <h1><Link className="navigation-link" to="/homepage">Home</Link></h1>
//         <h1>
//           <Link className="navigation-link" to="/schedule">
//             Schedule
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="">
//             Stats
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="/tryouts">
//             Try out
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="">
//             Donate
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="/sponsor">
//             Sponsor
//           </Link>
//         </h1>
//         <h1>
//           <Link className="navigation-link" to="/admin">
//             Admin
//           </Link>
//         </h1>
//       </nav>
//     </div>
//   );
// }

// export default HomeNav;

// ------------------
// import { useState } from "react";
// import { Link } from "react-router-dom";

function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="home-nav">
      <input type="checkbox" id="nav-control" className="nav-control" />
      <label htmlFor="nav-control" className="home-nav__toggle" onClick={toggleMenu}>
        <div className={`controller ${isOpen ? 'open' : ''}`}>
          <div className="line line--1"></div>
          <div className="line line--2"></div>
          <div className="line line--3"></div>
        </div>
      </label>

      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <h1><Link className="navigation-link" to="/homepage" onClick={toggleMenu}>Home</Link></h1>
        <h1><Link className="navigation-link" to="/schedule" onClick={toggleMenu}>Schedule</Link></h1>
        <h1><Link className="navigation-link" to="" onClick={toggleMenu}>Stats</Link></h1>
        <h1><Link className="navigation-link" to="/tryouts" onClick={toggleMenu}>Try out</Link></h1>
        <h1><Link className="navigation-link" to="" onClick={toggleMenu}>Donate</Link></h1>
        <h1><Link className="navigation-link" to="/sponsor" onClick={toggleMenu}>Sponsor</Link></h1>
        <h1><Link className="navigation-link" to="/admin" onClick={toggleMenu}>Admin</Link></h1>
      </nav>
    </div>
  );
}

export default HomeNav;
