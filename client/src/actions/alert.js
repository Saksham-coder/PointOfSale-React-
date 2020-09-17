import {v4 as uuid} from 'uuid'

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid();
    // console.log(id)
    dispatch({
        type:"SET_ALERT",
        payload: {
            msg, alertType, id
        }
    })
    
    setTimeout(()=> dispatch({
        type:"REMOVE_ALERT",
        payload:id
    }), 5000)
}