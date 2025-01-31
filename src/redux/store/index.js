import { combineReducers, configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profile"
import experiencesReducer from "../reducers/experiences"
import postReducer from "../reducers/posts"
import commentsReducer from "../reducers/comments"




const mainReducer = combineReducers({
    profile: profileReducer,
    experiences: experiencesReducer,
    post: postReducer,
    comments: commentsReducer
})



const store = configureStore({
    reducer: mainReducer,
})



export default store