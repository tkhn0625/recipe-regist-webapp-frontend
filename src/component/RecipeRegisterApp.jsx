import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ListRecipesComponent from "./ListRecipesComponent";
import {Route, Switch} from "react-router";

class RecipeRegisterApp extends Component{
    render(){
        return(
            <div className={RecipeRegisterApp}>
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/recipes" component={ListRecipesComponent}/>
                        </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default RecipeRegisterApp;