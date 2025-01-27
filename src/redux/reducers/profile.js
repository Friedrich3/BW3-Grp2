import { GET_DATA_SUCCESS } from "../action";

const initialObject= {
  _id: "",
  name: "",
  surname: "",
  email: "",
  username: "",
  title: "--",
  bio: "",
  area: "",
  image: "",
    createdAt: "",
  updatedAt: "",
 __v: 0,
};
const initialState ={
    data:initialObject,
    error:'',

}


const profileReducer = (state = initialState, action) => {

    switch(action.type){
        
        case GET_DATA_SUCCESS:
            return{
                ...state,
                data: action.payload
            }


        default:
            return state
    }

};

export default profileReducer;
