import { GET_COMMENT_ERROR, GET_COMMENT_SUCCESS, POST_COMMENT_SUCCESS } from "../action"



const initialState ={
    data:[],
    error:''
}


const commentsReducer = (state = initialState, action) =>{

    switch(action.type){

        case GET_COMMENT_SUCCESS:
            return{
                ...state,
                data: action.payload
            }

        case GET_COMMENT_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                data: state.data.push(action.payload)
            }

        default:
            return state
    }


}
export default commentsReducer