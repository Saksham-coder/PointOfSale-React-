const initialState = {
    products: [],
    ordering: "desc",
    singleproduct: {}
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
            case "LOAD_PRODUCT":
                console.log(payload)
                return{
                    ...state,
                    singleproduct:payload.data
                }
        default:
        return state
    }
}