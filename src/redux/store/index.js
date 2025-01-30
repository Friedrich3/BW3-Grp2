import { combineReducers, configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profile"
import experiencesReducer from "../reducers/experiences"
import postReducer from "../reducers/posts"




const mainReducer = combineReducers({
    profile: profileReducer,
    experiences: experiencesReducer,
    post: postReducer
})



const store = configureStore({
    reducer: mainReducer,
})



export default store