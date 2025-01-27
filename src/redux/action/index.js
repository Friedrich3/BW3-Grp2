export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'




export const getDataAction = ()=>{
    return async (dispatch) => {
        const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/me'
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4'
        
            try {
                const response = await fetch(endpoint,{
                    headers:{
                        "Authorization":token
                    }})
                if(response.ok){
                    const data = await response.json()
                    dispatch({
                        type: GET_DATA_SUCCESS,
                        payload: data
                    })

                }else{
                    throw new Error('Errore Fetch Profilo')
                }
                    
                
            } catch (error) {
                console.log(error)
                dispatch({
                    type: GET_DATA_ERROR,
                    payload:error
                })
            }
    }
}