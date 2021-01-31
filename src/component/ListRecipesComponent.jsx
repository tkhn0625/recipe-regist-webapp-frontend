import React, { Component } from "react";
import RecipeDataService from "../api/RecipeDataService";

class ListRecipesComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
            recipes: [],
            message: null
        }
        this.refreshRecipes = this.refreshRecipes.bind(this);
        this.lookRecipeClicked=this.lookRecipeClicked(this);
    }
    //常時実行されるメソッド
    componentDidMount(){
        this.refreshRecipes();
        console.log(this.state)
    }

    refreshRecipes(){
        let username = "tkhn0625"
        RecipeDataService.retrieveAllRecipes(username)
            .then(
                response => {
                    this.setState({recipes: response.data})
                }
            )
    }

    lookRecipeClicked(id){
        console.log(id);
        this.props.history.push(`/recipes/${id}`)
    }

    render() {
        return(
            <div>
                <h1>登録レシピ一覧</h1>
                <div className="container">
                    <table className="table">
                        <tr>
                            <th>料理名</th>
                            <th>カロリー</th>
                        </tr>
                        <tbody>
                        {
                            this.state.recipes.map (
                                recipes =>
                                    <tr key={recipes.id}>
                                        <td>{recipes.cookingName.toString()}</td>
                                        <td>{recipes.calorie + " kcal"}</td>
                                        <td><button className="btn btn-success" onClick = {()=>this.lookRecipeClicked(recipes.id)}>レシピを見る</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListRecipesComponent;