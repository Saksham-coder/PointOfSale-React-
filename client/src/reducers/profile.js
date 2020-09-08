const initialState = {
    items: [{details:'milk', price:40, quantity:1},{details:'Tea', price:25, quantity:1}],
    total:0
}

export default function(state= initialState, action){
    const {type, payload} = action;

    switch(type) {
        case "ADD_ITEM":
            const index = state.items.findIndex(el => el.details === payload.details)
            console.log(index)
            if (index === -1){
                return {
                ...state,
                items: [ ...state.items, payload ]
            }
            } else {
                return {
                    ...state,
                    items : state.items.map((item,i) => 
                index === i ? {...item, quantity: item.quantity + 1}
                : item)}
            }
        case "TOTAL":
            return {
                ...state,
                total: payload
            }
        default: 
        return state
    }
}