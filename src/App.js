// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './components/Navbar';
// import News from './components/News';
// // import { createContext } from 'react';
// import {
//   // createBrowserRouter,RouterProvider,
//  BrowserRouter as Router
//  ,Switch
//  ,Route
// } from "react-router-dom";

// function App() {
// const router =createBrowserRouter([
//   {
//     path:"/"
//     element:
    
//   },{},{}
// ])
 
//     return (
//       <div>


//         {/* <Router>
//         <NavBar/> 
//         <Switch>
//           <Route exact path="/"><News key="general" pageSize={9} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News key="business" pageSize={9} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News key="entertainment" pageSize={9} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News key="general" pageSize={9} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News key="health" pageSize={9} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News key="science" pageSize={9} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News key="sports" pageSize={9} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News key="technology" pageSize={9} country="in" category="technology"/></Route> 
//         </Switch>
//         </Router> */}
//       </div>
//     )
//   }
//   export default App;



import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <News key="general" pageSize={9} country="in" category="general" />
      </>
    ),
  },
  {
    path: "/business",
    element: (
      <>
        <Navbar />
        <News key="business" pageSize={9} country="in" category="business" />
      </>
    ),
  },
  {
    path: "/entertainment",
    element: (
      <>
        <Navbar />
        <News key="entertainment" pageSize={9} country="in" category="entertainment" />
      </>
    ),
  },
  {
    path: "/general",
    element: (
      <>
        <Navbar />
        <News key="general" pageSize={9} country="in" category="general" />
      </>
    ),
  },
  {
    path: "/health",
    element: (
      <>
        <Navbar />
        <News key="health" pageSize={9} country="in" category="health" />
      </>
    ),
  },
  {
    path: "/science",
    element: (
      <>
        <Navbar />
        <News key="science" pageSize={9} country="in" category="science" />
      </>
    ),
  },
  {
    path: "/sports",
    element: (
      <>
        <Navbar />
        <News key="sports" pageSize={9} country="in" category="sports" />
      </>
    ),
  },
  {
    path: "/technology",
    element: (
      <>
        <Navbar />
        <News key="technology" pageSize={9} country="in" category="technology" />
      </>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        {/* Navbar is included within each route to ensure it's rendered on every page */}
      </div>
    </RouterProvider>
  );
}

export default App;
