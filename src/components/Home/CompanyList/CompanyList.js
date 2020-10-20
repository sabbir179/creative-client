import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './CompanyList.css'
const CompanyList = () => {
    return (
        <div align="center">
            <img  id="img" src={slack} alt="..." class="rounded-sm"></img>
            <img  id="img" src={google} alt="..." class="rounded-sm"></img>
            <img id="img" src={uber} alt="..." class="rounded-sm"></img>
            <img id="img" src={netflix} alt="..." class="rounded-sm"></img>
            <img id="img" src={airbnb} alt="..." class="rounded-sm"></img>
        </div>
    );
};

export default CompanyList;