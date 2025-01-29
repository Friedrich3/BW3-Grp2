import { GET_POST_SUCCESS } from "../action"

const initialState ={
    data:[],
    error:''
}


const postReducer = (state = initialState, action) =>{

    switch(action.type){

        case GET_POST_SUCCESS:
            return{
                ...state,
                data: action.payload
            }

        default:
            return state
    }



}

export default postReducer