import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import CompanyList from '../CompanyList/CompanyList';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <CompanyList></CompanyList>
            <Services></Services>
            <Works></Works>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </section>
    );
};

export default Home;