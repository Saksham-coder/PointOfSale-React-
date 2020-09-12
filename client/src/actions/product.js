import _ from 'lodash'
import axios from 'axios'
import {loadUser} from './auth'

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

export const singleProductDetail = ({id}) => async dispatch => {
    try{
        console.log("from action", id)
        console.log(`/api/v1/post/${id.id}`)
        const res = await axios.get(`/api/v1/products/${id}`)
        console.log(res.data)
        dispatch({
            type:"LOAD_PRODUCT",
            payload: res.data
        })
    }catch(err){
        console.log(err)
    }
}

export const updateSingleProductDetail = ({id, detail, category, price}) => async dispatch => {
    try{
        // console.log("from action", {detail, category, price})
        let body = {}
        if(  detail) {
            body.details = detail
        }
        if(  category) {
            body.category = category
        }
        if(  price) {
            body.price = price
        }
        // console.log(body)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // console.log(`/api/v1/products/${id}`)
        const res = await axios.patch(`/api/v1/products/${id}`,
            body,
            config
        )
        // console.log(res.data)
        dispatch(loadUser())
        dispatch({
            type:"LOAD_PRODUCT",
            payload: res.data
        })
    }catch(err){
        console.log(err)
    }
}