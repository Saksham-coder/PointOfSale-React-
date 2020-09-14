const initialState = {
    products: [],
    ordering: "desc",
    singleproduct: {},
    productList:[{
            tag:"first",
            detail:"",
            category:"",
            price:""
        },
        {
            tag:"second",
            detail:"",
            category:"",
            price:""
        },
        {
            tag:"third",
            detail:"",
            category:"",
            price:""
        },
        {
            tag:"fourth",
            detail:"",
            category:"",
            price:""
        },
        {
            tag:"fifth",
            detail:"",
            category:"",
            price:""
        }
    ]
}

export default function(state= initialState, action){
    const {type, payload} = action;

    switch(type) {
        case "PRODUCTS_LOADED":
            console.log("Payload that i will receive here==>>>",payload)
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