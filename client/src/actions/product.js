import _ from 'lodash'

export const filteringInProduct = ({propProduct, value}) => dispatch => {
    try{
        console.log("LEt me search in this==>>", propProduct, value)
        let searched =[]
        propProduct.user.products.map(product => { 
             if (product.details.indexOf(value) >= 0)
             {
             console.log(product.details.indexOf(value) >= 0)
            searched.push(product)
        }});
        console.log(searched)
        dispatch({
            type:"PRODUCTS_LOADED",
            payload: {
                products: searched
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const changeOrder = (products, ordering) => dispatch => {
    try{
        console.log("from action ",products, ordering)
        let filterProduct
        (ordering === 'desc') ?
         filterProduct = _.orderBy(products, ['price'],['desc'])
        :
         filterProduct = _.orderBy(products, ['price'],['asc'])

        // (ordering === 'asc') ? "desc" : "asc"
        console.log(filterProduct)
        dispatch({
            type:"PRODUCTS_LOADED",
            payload: {
                products: filterProduct
            }
        })
    }catch(err){
        console.log(err)
    }
}