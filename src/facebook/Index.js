import React from 'react';
import Header from './header/Header';
import './index.css';
import BodyLeft from './body/BodyLeft';
import Footer from './footer/Footer';

class Index extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <BodyLeft/>
                <Footer/>
            </div>
        );
    }
}

export default Index;
