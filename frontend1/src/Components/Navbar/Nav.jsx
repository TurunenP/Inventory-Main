// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from "../../images/logimage.png";
// import "../../App.css";
// import { Link } from "react-router-dom";

// function BasicExample() {
//   return (
//     <>
//       <Navbar
//         expand="lg"
//         style={{ backgroundColor: "#23408f", marginBottom: "1.5px" }}
//       >
//         <Container>
//           <Navbar.Brand href="#home" className="text-white brand-title">
//             <img
//               src={logo}
//               alt="Logo"
//               style={{ width: "40px", height: "40px", marginRight: "10px" }}
//             />
//             UNIVERSITY OF ROBO LAB
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <NavDropdown
//                 title={
//                   <span className="text-white custom-dropdown-toggle">
//                     Menu
//                   </span>
//                 }
//                 id="basic-nav-dropdown"
//                 className="custom-dropdown-toggle"
//               >
//                 {/* <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item> */}
//                 <NavDropdown.Item as={Link} to="/admin">
//                   Admin
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 {/* <NavDropdown.Item href="#action/3.4">Student</NavDropdown.Item> */}
//                 <NavDropdown.Item as={Link} to="/student">
//                   Students
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Navbar className="admin">
//         <div className="navbar-separator">
//           <Nav className="justify-content-end">
//             <Nav.Link as={Link} to="/about" className="text-white header">
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/blog" className="text-white header">
//               Blog
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact" className="text-white header">
//               Contact
//             </Nav.Link>
//             {/* <Nav.Link href="#about" className="text-white header">
//               About
//             </Nav.Link>
//             <Nav.Link href="#blog" className="text-white header">
//               Blog
//             </Nav.Link>
//             <Nav.Link href="#contact" className="text-white header">
//               Contact
//             </Nav.Link> */}
//           </Nav>
//         </div>
//       </Navbar>
//     </>
//   );
// }

// export default BasicExample;




import { Link } from "react-router-dom";
import logo from "../../images/image.png";

function NavbarComponent() {
  return (
    <>
      {/* Main Navbar */}
      {/* <nav className="bg-blue-800 p-4 shadow-md"> */}
      <nav className="bg-[#23408f] p-3 shadow-md mb-[1px] rounded-t-2xl rounded-tr-2xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-white text-xl font-semibold">
              UNIVERSITY OF ROBO LAB
            </span>
          </div>
          <div className="relative">
            <div className="text-white text-lg">
              <div className="group inline-block relative">
                <button className="bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-md focus:outline-none">
                  Menu
                </button>
                <ul className="absolute hidden group-hover:block bg-white text-blue-800 w-40 mt-2 rounded-md shadow-lg">
                  <li className="px-4 py-2 hover:bg-blue-100">
                    <Link to="/admin">Admin</Link>
                  </li>
                  <li className="border-t border-gray-300"></li>
                  <li className="px-4 py-2 hover:bg-blue-100">
                    <Link to="/student">Students</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      {/* <nav className="bg-[#23408f] p-6 shadow-md mb-[1.5px] rounded-b-2xl rounded-br-2xl"> */}
      <nav className="bg-[#23408f] p-6 shadow-md mb-[1.5px] rounded-b-2xl">
        <div className="container mx-auto flex justify-end space-x-6 pr-6">
          <Link to="/about" className="text-white text-xl hover:text-blue-200 ">
            About
          </Link>
          <Link to="/blog" className="text-white text-xl hover:text-blue-200">
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl hover:text-blue-200"
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* Image Section Below Navbar */}
      <div className="flex justify-center mt-4">
        {/* <img
          src={logo}
          alt="Robo Lab Illustration"
          className="w-32 h-32 object-contain"
        /> */}
      </div>
    </>
  );
}

export default NavbarComponent;
