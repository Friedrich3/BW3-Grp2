import { combineReducers, configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profile"
import experiencesReducer from "../reducers/experiences"




const mainReducer = combineReducers({
    profile: profileReducer,
    experiences: experiencesReducer
})



const store = configureStore({
    reducer: mainReducer,
})



export default store