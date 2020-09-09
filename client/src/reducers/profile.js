const initialState = {
    items: [{details:'milk', price:40, quantity:1},{details:'Tea', price:25, quantity:1}],
    total:0,
    revenue:"",
    distype:0,
    discount:"",
    customer:{
        paymentType:"",
        phone:"",
        name:"",
        email:"",
        shippingAddress:"",
        city:"",
        pincode:""
    }
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
        case "INCREASE_ITEM":
            const ind = state.items.findIndex(el => el.details === payload.details)
            return {
                ...state,
                items : state.items.map((item,i) => 
            ind === i ? {...item, quantity: item.quantity + 1}
            : item)}
        case "DECREASE_ITEM":
            const ind2 = state.items.findIndex(el => el.details === payload.details)
            return {
                ...state,
                items : state.items.map((item,i) => 
            ind2 === i ? {...item, quantity: item.quantity - 1}
            : item)}
        case "TOTAL":
            return {
                ...state,
                total: payload
            }
        case "ADD_CUSTOMERDETAIL":
            console.log("PAYLOAD===>>>>",payload)
            if (payload.pay){
            return{
                ...state,
                customer:{
                    ...state.customer,
                    paymentType:payload.pay
                    }
                }
            }
            if(payload.disc){
            return{
                ...state,
                discount:payload.disc    
                }
            }
            if (payload.dist){
                return{
                    ...state,
                    distype:payload.dist
                }
            }
            if (payload.na){
                return{
                    ...state,
                    customer:{
                        ...state.customer,
                        name:payload.na
                        }
                    }
            }
            if (payload.em){
                return{
                    ...state,
                    customer:{
                        ...state.customer,
                        email:payload.em
                        }
                    }
            }
            if (payload.ph){
                return{
                    ...state,
                    customer:{
                        ...state.customer,
                        phone:payload.ph
                        }
                    }
            }
            if (payload.addr){
                return{
                    ...state,
                    customer:{
                        ...state.customer,
                        shippingAddress:payload.addr
                        }
                    }
            }
            if (payload.ci){
                return{
                    ...state,
                    customer:{
                        ...state.customer,
                        city:payload.ci
                        }
                    }
            }
            if (payload.pin){
                return{
                    ...state,
                    customer:{
                        ...state.customer,
                        pincode:payload.pin
                        }
                    }
            }
            if (payload.rev){
                return{
                    ...state,
                    revenue:payload.rev
                }
            }
        default: 
        return state
    }
}