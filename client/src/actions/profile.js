export const pushing = ({detail, price} ) => dispatch => {
    try{
        
        dispatch({
            type:"ADD_ITEM",
            payload: {
                details:detail, price, quantity:1
            }
        })
    }catch(err){
        console.log(err)
    }
} 

export const increase = ({detail}) => dispatch => {
    try{
        dispatch({
            type:"INCREASE_ITEM",
            payload:{
                details:detail
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const decrease = ({detail}) => dispatch => {
    try{
        dispatch({
            type:"DECREASE_ITEM",
            payload:{
                details:detail
            }
        })
    }catch(err){
        console.log(err)
    }
}


export const totalling = ({total}) => dispatch =>  {
try{
    dispatch({
        type:"TOTAL",
        payload: total
    })
}catch(err){
    console.log(err)
}
}

export const customer = ({paymentType,revenue,distype,discount,name,phone,email,address,city,pincode}) => dispatch => {
    try{
        console.log("From action customer====>>>",paymentType,revenue,distype,discount,name,phone,email,address,city,pincode)
        if (address){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{addr:address}
            })
        }
        if(discount){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{disc:discount}
            })
        }
        if(distype){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{dist:distype}
            })
        }
        if (city){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{ci:city}
            })
        }
        if (pincode){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{pin:pincode}
            })
        }
        if (paymentType){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{pay:paymentType}
            })
        }
        if (revenue){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{rev:revenue}
            })
        }
        if (name){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{na:name}
            })
        }
        if (phone){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{ph:phone}
            })
        }
        if (email){
            dispatch({
                type:'ADD_CUSTOMERDETAIL',
                payload:{em:email}
            })
        }
    }catch(err){
        console.log(err)
    }
}