import React from 'react';
import Header from './header/Header';
import './index.css';
import BodyLeft from './body/BodyLeft';

class Index extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <BodyLeft/>
            </div>
        );
    }
}

export default Index;
