import { GET_EXPS_ERROR, GET_EXPS_SUCCESS } from "../action";

// const initialObject = {
//     role: "",
//   company: "",
//   startDate: "",
//   endDate: "", // può essere null
//   description: "",
//   area: "",
//   image:"https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
// }

const initialState ={
    data:[],
    error:''
}




const experiencesReducer = (state = initialState, action) => {

    switch(action.type){
        
        case GET_EXPS_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case GET_EXPS_ERROR:
            return{
                ...state,
                error:action.payload
            }


        default:
            return state
    }

};

export default experiencesReducer;