import axios from 'axios'
import {API_URL} from '../Constants';

class RecipeDataService{
    retrieveAllRecipes(name){
        return axios.get(`${API_URL}/users/${name}/recipes`)
    }
}

export default new RecipeDataService();