const initialState = {
    filterDate: "today",
    swiggy:"",
    zomato:0,
    foodpanda:0,
    store:0
}

export default function(state= initialState, action){
    const {type, payload} = action;

    switch(type) {
        case"UPDATE_TODAYSALES":
            return {
                ...state,
                swiggy:payload.swiggy,
                zomato:payload.zomato,
                foodpanda:payload.foodpanda,
                store:payload.store
            }
        default: 
        return state
    }
}