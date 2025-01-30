export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const GET_EXPS_SUCCESS = 'GET_EXPS_SUCCESS'
export const GET_EXPS_ERROR = 'GET_EXPS_ERROR'
export const DELETE_EXP_SUCCESS = 'DELETE_EXP_SUCCESS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_ERROR = 'GET_POST_ERROR'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const UPDATE_POST='UPDATE_POST'



export const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4'

export const getDataAction = () => {
    return async (dispatch) => {
        const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/me'
        try {
            const response = await fetch(endpoint, {
                headers: {
                    "Authorization": token
                }
            })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: data
                })
            } else {
                throw new Error('Errore Fetch Profilo')
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: GET_DATA_ERROR,
                payload: error
            })
        }
    }
}


export const getExpAction = (userId) => {
    return async (dispatch) => {
        const endpointGET = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
        try {
            const response = await fetch(endpointGET, {
                headers: {
                    "Authorization": token
                }
            })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: GET_EXPS_SUCCESS,
                    payload: data
                })
            } else {
                throw new Error("Errore Fetch Experiences")
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const deleteExpAction = (userId, expId) => {
    return async (dispatch) => {
        const endpointDelete = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`
        try {
            const response = await fetch(endpointDelete, {
                method: 'DELETE',
                headers: {
                    "Authorization": token
                }
            })
            if (response.ok) {
                dispatch({
                    type: DELETE_EXP_SUCCESS,
                    payload: expId
                })
            } else {
                throw new Error('Errore Delete Experience')
            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const getPostAction = () => {
    return async (dispatch) => {
        const endpoint = 'https://striveschool-api.herokuapp.com/api/posts/'
        try {
            const response = await fetch(endpoint, {
                headers: {
                    "Authorization": token
                }
            })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: GET_POST_SUCCESS,
                    payload: data
                })
            } else {
                throw new Error('Errore Fetch Profilo')
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: GET_POST_ERROR,
                payload: error
            })
        }
    }
}

export const handleDeleteAction = (postId) => {
    return async (dispatch) =>{
        const urlDELETEpost = `https://striveschool-api.herokuapp.com/api/posts/${postId}`
        try {
            const response = await fetch(urlDELETEpost, {
                method: 'DELETE',
                headers: {
                    "Authorization": token,
                }
            })
            if (response.ok) {
                dispatch({
                    type: DELETE_POST_SUCCESS,
                    payload: postId
                })
            } else {
                throw new Error("ERRORE DELETE POSTs")
            }
            
        } catch (error) {
            console.log('ERRORE', error)
        }
    }
}
export const handleUpdateAction = (postId, newText) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" ,"Authorization": token},
          body: JSON.stringify({text: newText }),
        });
  
        if (!response.ok) throw new Error("Errore nell'aggiornamento");
  
        const updatedPost = await response.json();
        dispatch({ type: UPDATE_POST, payload: updatedPost });
      } catch (error) {
        console.error("Errore:", error);
      }
    };
  };