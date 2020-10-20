import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import CompanyList from '../CompanyList/CompanyList';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <CompanyList></CompanyList>
            <Services></Services>
            <Works></Works>
            <ClientFeedback></ClientFeedback>
        </section>
    );
};

export default Home;