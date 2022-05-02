import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context.js';
const Dashboard = () => {
  const {isloading}=React.useContext(GithubContext)
  if(isloading){
    return(<main>
      <Navbar></Navbar>
      <Search></Search>
      <img src={loadingImage} className="loading-img"alt="loading"></img>
    </main>)
  };
  return (
    <main>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  );
};

export default Dashboard;
