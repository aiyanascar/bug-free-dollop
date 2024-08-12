import React from 'react';
import Header from './Header';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="content">
        {/* Other content can go here */}
      </main>
    </div>
  );
};

export default Home;
