import { combineReducers } from "redux"
import heart from "./like"
import cart from "./cart"
import auth from "./auth"


const rootReducer = combineReducers({
    water: ()=> "Redux water",
    heart,
    cart,
    auth
})

export default rootReducer