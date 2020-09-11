const initialState = {
    products: [],
    ordering: "desc"
}

export default function(state= initialState, action){
    const {type, payload} = action;

    switch(type) {
        case "PRODUCTS_LOADED":
            console.log(payload)
            return{
                ...state,
                products:payload.products,
                ordering: state.ordering === 'desc' ? "asc" : "desc"
            }
        default:
        return state
    }
}