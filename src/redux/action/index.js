export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const GET_EXPS_SUCCESS = 'GET_EXPS_SUCCESS'
export const GET_EXPS_ERROR = 'GET_EXPS_ERROR'
export const DELETE_EXP_SUCCESS = 'DELETE_EXP_SUCCESS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_ERROR = 'GET_POST_ERROR'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const UPDATE_POST='UPDATE_POST'
export const GET_COMMENT_SUCCESS ='GET_COMMENT_SUCCESS'
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR'
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'



export const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4'
const tokenCommenti ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzljOGJmNTMwYzQ4ZDAwMTU5M2IyOWYiLCJpYXQiOjE3MzgzMTI2OTMsImV4cCI6MTczOTUyMjI5M30.r5rxBIVJBTjBfdkrkkdUy2kOyb73VjsYsjPvhm29AKg'
        

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


export const getAllCommentsAction = () => {
    
    return async (dispatch) => {
        const endpoint = 'https://striveschool-api.herokuapp.com/api/comments/'
        try {
            const response = await fetch(endpoint, {
                headers: {
                    "Authorization": tokenCommenti
                }
            })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: GET_COMMENT_SUCCESS,
                    payload: data
                })
            } else {
                throw new Error('Errore Fetch Commenti')
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: GET_COMMENT_ERROR,
                payload: error
            })
        }
    }
}

export const postCommentAction = (commento ,elementID) => {
    return async() =>{
        const object = {
            'comment': commento,
            'rate':'1',
            'elementId': elementID
        }
        const endpoint = 'https://striveschool-api.herokuapp.com/api/comments/'
        try {
            const response = await fetch(endpoint,{
                method:"POST",
                headers:{
                    "Authorization": tokenCommenti,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(object)
            })
            if(!response.ok){
                throw new Error('ERRORE POST Commento')
            }
        } catch (error) {
            console.log(error)
        }

    }
}