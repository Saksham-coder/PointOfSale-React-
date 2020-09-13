import _ from 'lodash'

const initialState = {
    receipt: "",
    count:"10",
    singleReceipt: ""
}

export default function(state= initialState, action){
    const {type, payload} = action;

    let newData

    switch(type) {
        case "RECEIPT_LOADED":
            console.log("payload for receipt ", payload)
            newData =  _.reverse(payload)
            console.log(state.count)
            let c = parseInt(state.count)
            console.log(newData)
            let filterData = JSON.parse(JSON.stringify(newData))
            filterData.splice(c)
            console.log(filterData)
            return {
                ...state,
                receipt: filterData
            }
        case "NEXT_PAGE":
            // console.log("From reducer",payload)
            let change = parseInt(state.count) +10
            let filterData2 = JSON.parse(JSON.stringify(payload.sold))
            filterData2.splice(0, change-10)
            filterData2.splice(10)
            // console.log(filterData2)
            return {
                ...state,
                receipt: filterData2,
                count: change
            } 
        case "PREV_PAGE":
                console.log("From reducer",payload)
                let change3 = parseInt(state.count) -10
                let filterData3 = JSON.parse(JSON.stringify(payload.sold))
                filterData3.splice(0, change3-10)
                filterData3.splice(10)
                console.log(filterData3)
                return {
                    ...state,
                    receipt: filterData3,
                    count: change3
                }
        case "LOAD_RECEIPT":
            return {
                ...state,
                singleReceipt: payload.data
            }
        default: 
        return state
    }
}