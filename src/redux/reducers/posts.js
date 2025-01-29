import { DELETE_POST_SUCCESS, GET_POST_ERROR, GET_POST_SUCCESS } from "../action"

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

        case GET_POST_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case DELETE_POST_SUCCESS:
            return{
                ...state,
                data: state.data.filter((e)=> {return e._id !== action.payload})
            }

        default:
            return state
    }



}

export default postReducer