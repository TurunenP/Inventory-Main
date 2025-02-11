// import { motion } from 'framer-motion';
// import img from '../../images/logimage.png';
// import Footer from '../../Components/Footer/Footer';
// // import Navbar from '../../Components/Navbar/Navbar';
// import Navbar from "../../Components/Navbar/Nav";

// export default function LandingPage() {
//   return (
//     <div className="h-screen w-screen">
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-800 text-white">
//         {/* Hero Section */}
//         <header className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-8 lg:py-24">
//           {/* Text Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="lg:w-1/2 text-center lg:text-left"
//           >
//             <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
//               Revolutionize Your Robotic
//               <br />
//               <span className="text-blue-300 lg:text-5xl">
//                 Assets with RoboLend
//               </span>
//             </h1>
//             <p className="text-lg mt-4 text-gray-200">
//               Welcome to the next era in robotic inventory management. RoboLend
//               is your strategic partner, providing a comprehensive solution for
//               tracking, managing, and optimizing your robotic assets.
//             </p>
//             <p className="text-lg mt-4 text-gray-200">
//               Welcome to the next era in robotic inventory management. RoboLend
//               is your strategic partner, providing a comprehensive solution for
//               tracking, managing, and optimizing your robotic assets.
//             </p>
//             <section className="mt-8">
//               <h2 className="text-3xl font-semibold">Lab Items Categories</h2>
//               <div className="mt-4 grid grid-cols-4 gap-4">
//                 <p className="p-2 bg-blue-950 text-center rounded-md">DEMO</p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">LEVERS</p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">
//                   ROBOTICS
//                 </p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">RELAYS</p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">
//                   SENSORS
//                 </p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">MOTORS</p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">
//                   CIRCUITS
//                 </p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">
//                   ACTUATORS
//                 </p>
//                 <p className="p-2 bg-blue-950 text-center rounded-md">
//                   GRIPPERS
//                 </p>
//               </div>
//             </section>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="lg:w-1/2"
//           >
//             <img
//               src={img}
//               alt="Lab Equipment"
//               className="w-full rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </header>

//         <Footer />
//       </div>
//     </div>
//   );
// }




// Home.jsx

// import { motion } from 'framer-motion';
// import img from '../../images/logimage.png';
// import Footer from '../../Components/Footer/Footer';
// // import Navbar from '../../Components/Navbar/Navbar';
// import Navbar from "../../Components/Navbar/Nav";
// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

// export default function LandingPage() {
//   return (
    
//     <div className="h-screen w-screen">
//       <Navbar />
//       <div className="min-h-screen bg-white text-black">
//         {/* Hero Section */}
//         <header className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-8 lg:py-24">
//           {/* Text Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="lg:w-1/2 text-center lg:text-left"
//           >
//             <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
//               Revolutionize Your Robotic
//               <br />
//               <span className="text-blue-300 lg:text-5xl">
//                 Assets with RoboLend
//               </span>
//             </h1>
//             <p className="text-lg mt-4 text-black">
//               Welcome to the next era in robotic inventory management. RoboLend
//               is your strategic partner, providing a comprehensive solution for
//               tracking, managing, and optimizing your robotic assets.
//             </p>
//             <p className="text-lg mt-4 text-black">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
//               blanditiis, recusandae, explicabo quasi autem earum odit ipsam
//               tempore repudiandae dolor nulla in neque aut maiores maxime
//               distinctio voluptas mollitia culpa!
//             </p>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="lg:w-1/2"
//           >
//             <img
//               src={img}
//               alt="Lab Equipment"
//               className="w-full rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </header>

//         {/* Lab Items Section */}
//         <div className="items mx-4 py-12">
//           <h2 className="lab-items text-3xl mb-8 mx-4">Lab Items</h2>
//           <div className="main-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4">
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-blue-700">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">PRODUCTS</h4>
//                 <BsFillArchiveFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">300</h1>
//             </div>
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-orange-600">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">CATEGORIES</h4>
//                 <BsFillGrid3X3GapFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">12</h1>
//             </div>
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-green-700">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">CUSTOMERS</h4>
//                 <BsPeopleFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">33</h1>
//             </div>
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-red-600">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">ALERTS</h4>
//                 <BsFillBellFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">42</h1>
//             </div>
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-blue-700">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">PRODUCTS</h4>
//                 <BsFillArchiveFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">300</h1>
//             </div>
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-orange-600">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">CATEGORIES</h4>
//                 <BsFillGrid3X3GapFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">12</h1>
//             </div>
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-green-700">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">CUSTOMERS</h4>
//                 <BsPeopleFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">33</h1>
//             </div>
//             <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-red-600">
//               <div className="card-inner flex items-center justify-between h-30">
//                 <h4 className="text-white">ALERTS</h4>
//                 <BsFillBellFill className="card_icon text-white text-2xl" />
//               </div>
//               <h1 className="text-white">42</h1>
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }


//Home.jsx
// import { motion } from 'framer-motion';
// import img from '../../images/logimage.png';
// import Footer from '../../Components/Footer/Footer';
// import Navbar from "../../Components/Navbar/Nav";

// export default function LandingPage() {
//   return (
//     <div className="h-screen w-screen">
//       <Navbar />
//       <div className="min-h-screen bg-white text-black">
//         {/* Updated Hero and Breadcrumb Section */}
//         <div className="container mx-auto px-6 py-16">
//           <div className="p-4 bg-gray-100 mb-4 rounded-md shadow-md">
//             <h1>Robo Lend</h1>
//             {/* Breadcrumb */}
//             <nav className="flex">
//               <h6 className="mb-0">
//                 <a href="#" className="text-black hover:underline">Home</a>
//                 <span className="mx-2">/</span>
//                 <a href="#" className="text-black hover:underline">Robotics Lab</a>
//                 <span className="mx-2">/</span>
//                 <a href="#" className="text-black hover:underline">Robo Lend</a>
//               </h6>
//             </nav>
//           </div>

//           {/* Hero */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <h2 className="mt-4 text-3xl font-semibold">Revolutionize Your Robotic Assets with RoboLend</h2>
//               <p className="mt-4 text-gray-700">
//                 Welcome to the next era in robotic inventory management. RoboLend is your strategic partner, providing a
//                 comprehensive solution for tracking, managing, and optimizing your robotic assets. Embrace precision,
//                 embrace control.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               {/* Image */}
//               <img
//                 src={img}
//                 alt="hero img"
//                 className="rounded-lg w-full max-w-lg"
//               />
//             </motion.div>
//           </div>

//           {/* Intro */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//             <div>
//               <p className="text-gray-700">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam blanditiis, recusandae, explicabo quasi
//                 autem earum odit ipsam tempore repudiandae dolor nulla in neque aut maiores maxime distinctio voluptas
//                 mollitia culpa!
//               </p>
//             </div>
//             <div></div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }


//Home.jsx

import { motion } from 'framer-motion';
import img from '../../images/logimage.png';
import Footer from '../../Components/Footer/Footer';
import Navbar from "../../Components/Navbar/Nav";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="min-h-screen bg-white text-black">
        {/* Hero and Content Section */}
        <div className="container mx-auto px-6 py-16">
          <h2 className="mb-20 text-4xl font-semibold text-center">
            Revolutionize Your Robotic Assets with RoboLend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* <h2 className="mt-4 text-3xl font-semibold">
                Revolutionize Your Robotic Assets with RoboLend
              </h2> */}
              <p className="mt-4 text-gray-700 text-lg">
                Welcome to the next era in robotic inventory management.
                RoboLend is your strategic partner, providing a comprehensive
                solution for tracking, managing, and optimizing your robotic
                assets. Embrace precision, embrace control.
              </p>
              <br />
              <br />
              <p className="text-gray-700 text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam blanditiis, recusandae, explicabo quasi autem earum odit
                ipsam tempore repudiandae dolor nulla in neque aut maiores
                maxime distinctio voluptas mollitia culpa!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Image */}
              <img
                src={img}
                alt="hero img"
                className="rounded-lg w-full max-w-lg h-[350px] "
              />
            </motion.div>
          </div>

          {/* Intro */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <p className="text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam blanditiis, recusandae, explicabo quasi autem earum odit
                ipsam tempore repudiandae dolor nulla in neque aut maiores
                maxime distinctio voluptas mollitia culpa!
              </p>
            </div>
            <div></div>
          </div> */}
        </div>

        {/* Lab Items Section */}
        <div className="items mx-4 py-12">
          <h2 className="lab-items text-3xl mb-8 mx-4">Lab Items Categories</h2>
          <div className="main-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4">
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-blue-700 ml-18 mr-5">
              <div className="card-inner flex items-center justify-between h-30 ">
                <h4 className="text-white mb-12">DEMO</h4>
                          </div>
                          <div className="card-inner flex items-center justify-between  ">
                <h4 className="text-white mb-12">QUANTITY</h4>
                  <h1 className="text-white">12</h1>
              </div>
            </div>
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-orange-600 ml-12 mr-5">
              <div className="card-inner flex items-center justify-between h-30">
                <h4 className="text-white mb-12">ELECTRONICS</h4>
                <BsFillGrid3X3GapFill className="card_icon text-white text-2xl" />
              </div>
              <h1 className="text-white">12</h1>
            </div>
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-green-700 ml-12 mr-5">
              <div className="card-inner flex items-center justify-between h-30">
                <h4 className="text-white mb-12">CUSTOMERS</h4>
                <BsPeopleFill className="card_icon text-white text-2xl" />
              </div>
              <h1 className="text-white">33</h1>
            </div>
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-red-600 ml-12 mr-12">
              <div className="card-inner flex items-center justify-between h-30">
                <h4 className="text-white mb-12">ALERTS</h4>
                <BsFillBellFill className="card_icon text-white text-2xl" />
              </div>
              <h1 className="text-white">42</h1>
            </div>
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-blue-700 ml-18 mr-5">
              <div className="card-inner flex items-center justify-between h-30">
                <h4 className="text-white mb-12">PRODUCTS</h4>
                <BsFillArchiveFill className="card_icon text-white text-2xl" />
              </div>
              <h1 className="text-white">300</h1>
            </div>
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-orange-600 ml-12 mr-5">
              <div className="card-inner flex items-center justify-between h-30">
                <h4 className="text-white mb-12">CATEGORIES</h4>
                <BsFillGrid3X3GapFill className="card_icon text-white text-2xl" />
              </div>
              <h1 className="text-white">12</h1>
            </div>
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-green-700 ml-12 mr-5">
              <div className="card-inner flex items-center justify-between h-30">
                <h4 className="text-white mb-12">CUSTOMERS</h4>
                <BsPeopleFill className="card_icon text-white text-2xl" />
              </div>
              <h1 className="text-white">33</h1>
            </div>
            <div className="card flex flex-col justify-between p-2.5 rounded-lg bg-red-600 ml-12 mr-12">
              <div className="card-inner flex items-center justify-between h-30">
                <h4 className="text-white mb-12">ALERTS</h4>
                <BsFillBellFill className="card_icon text-white text-2xl" />
              </div>
              <h1 className="text-white">42</h1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

