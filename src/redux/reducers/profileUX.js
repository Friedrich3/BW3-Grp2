
const initialState = {
    role: "",
  company: "",
  startDate: "",
  endDate: "", // può essere null
  description: "",
  area: "",
  image:"https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"

}




const experiencesReducer = (state = initialState, action) => {

    switch(action.type){
        
        case GET_EXPS_SUCCESS:
            return{
                ...state,
                userExp: action.payload
            }


        default:
            return state
    }

};

export default experiencesReducer;