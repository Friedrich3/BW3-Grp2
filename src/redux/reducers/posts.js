import { DELETE_POST_SUCCESS, GET_POST_ERROR, GET_POST_SUCCESS,} from "../action"

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
            // case UPDATE_POST:
            // return {
            //     ...state,
            //     data: state.data.map(post => 
            //         post._id === action.payload._id ? action.payload : post
            //     )
            // };

        default:
            return state
    }



}

export default postReducer