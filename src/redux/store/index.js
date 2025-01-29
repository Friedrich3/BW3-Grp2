import { combineReducers, configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profile"




const mainReducer = combineReducers({
    profile: profileReducer
})



const store = configureStore({
    reducer: mainReducer,
})



export default store