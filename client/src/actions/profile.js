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