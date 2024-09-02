import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FootItems from '../../Components/FoodItems/FootItems';
import AppDownload from '../../Components/AppDownload/AppDownload';

const Home = () => {
    const [category, setCategory] = useState('All');
  return (
    <div>
     <Header/>
     <ExploreMenu category={category} setCategory={setCategory}/> 
     <FootItems category = {category}/>
     <AppDownload/>
    </div>
  );
}

export default Home;
