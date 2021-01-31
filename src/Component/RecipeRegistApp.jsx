import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class RecipeRegisterApp extends Component{
    render(){
        return(
            <div className={RecipeRegisterApp}>
                <Router>
                    <HeaderComponent/>

                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default RecipeRegisterApp;