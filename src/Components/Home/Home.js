import React from 'react';
import Footer from '../../Footer';
import Banner from '../Banner';
import SecoundSection from './SecoundSection';
import Team from './Team';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
           <Team></Team>
           <SecoundSection></SecoundSection>
           <Footer></Footer>
        </div>
    );
};

export default Home;