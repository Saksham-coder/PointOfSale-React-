const initialState = {
    products: [],
    ordering: "desc",
    singleproduct: {},
    productList:[{
            checking:"marked",
            tag:"first",
            detail:"",
            category:"",
            price:""
        },
        {
            checking:"marked",
            tag:"second",
            detail:"s",
            category:"s",
            price:"1"
        },
        {
            checking:"marked",
            tag:"third",
            detail:"",
            category:"",
            price:""
        },
        {
            checking:"marked",
            tag:"fourth",
            detail:"",
            category:"",
            price:""
        },
        {
            checking:"marked",
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
        case "ADD_MARKING":
            return {
                ...state,
                productList: state.productList.map( product => product.tag === payload.serial ?
                    {...product, checking:payload.value} :
                        product
                    )
            }
        case "ADD_CATEGORY":
            console.log("payload", payload)
                return {
                    ...state,
                    productList: state.productList.map( product => product.tag === payload.serial ?
                        {...product, category:payload.value} :
                        product
                        )
                }
        case "ADD_DETAIL":
            return {
                ...state,
                productList: state.productList.map(product => product.tag === payload.serial ? 
                    {...product, detail:payload.value} :
                    product
                    )
            }
        case "ADD_PRICE":
                return {
                    ...state,
                    productList: state.productList.map(product => product.tag === payload.serial ? 
                        {...product, price:payload.value} :
                        product
                        )
                }
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