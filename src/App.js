import './App.css';
import './css/styles.css'
import StatefullExample from './day1-practice/components/beforeHooks/statefull';
import FetchDataHooks from './day1-practice/FetchHooks';
import CounterApp from './day1-practice/counterApp';
import CounterHooks from './day1-practice/Hooks/CounterHooks';
import TransferApp from './day2-practice/components';
import { BrowserRouter as Router, Link, Route, Switch, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

const active = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
const inactive = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

function App() {
  console.log(window.location.pathname)
  console.log(window.location.pathname == "/")
  let x = 0
  useEffect(()=>{
    console.log(x++)
  })
  return (
    <Router>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/*
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/*
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          */}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <CustomLink path="/" name="Home"/>
                  <CustomLink path="/profile" name="Profile"/>
                  <CustomLink path="/app" name="App"/>

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <CustomLink path="/" name="Home" className="block"/>
            <CustomLink path="/profile" name="Profile" className="block"/>
            <CustomLink path="/app" name="App" className="block"/>
          </div>
        </div>
      </nav>
      <div className="App">
          <Switch>
            <Route path="/app">
              <TransferApp/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

const Home = () =>{
  return(
    <React.Fragment>
      <h1>Home Page</h1>
      <hr/>
      <p>Welcome to my Page</p>
    </React.Fragment>
    )
}
const Profile = () =>{
  return(
    <React.Fragment>
      <h1>Profile Page</h1>
      <hr/>
      <p>Name: Brosky</p>
      <p>City: Jakarta</p>
    </React.Fragment>
    )
}
const CustomLink=(props)=>{
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const {path, name, className} = props
  return(
    <Link to={path} className={pathname == path ? `${active} ${className}` : `${inactive} ${className}`}>{name}</Link>
  )
}
export default App;
