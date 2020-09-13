import React, { Component,useEffect, useState  } from 'react'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { singleProductDetail, updateSingleProductDetail} from './../../../actions/product'
import './ProductDetail.css'


export const ProductDetail = (props) => {
    useEffect( () => {
        props.singleProductDetail({id:props.match.params.id})
    },[])
 
    const [formData, setFormData] = useState({
        detail: '',
        category: '',
        price:''
      });
    
    const { detail, category, price } = formData;
    
    const onChange = e =>{
        console.log( e.target.name, e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }   
    const onSubmit = e => {
        console.log("Showing details before updating",detail, category, price)   
        props.updateSingleProductDetail({id:props.match.params.id,detail, category, price})
    };
    // console.log(props.match.params.id, props.products)




    
    return (
        <div className='product'>
           <div className='sell_heading'>
                    <h2>Product</h2>
            </div>
        <div className='productdetail'>
            <div className='productdetail_left'>
                <h3>Your Product Details</h3>
                <p>Edit your product details here. Product name should be unique.</p>
            </div>
            <div className='productdetail_right'>
                <p>Product Name</p>
                <input type="text" onChange={onChange} name="detail" value={detail} placeholder={props.product.details} />
                <p>Product Category</p>
                <input type="text"  onChange={onChange} name="category" value={category}  placeholder={props.product.category} />
                <p>Product Price</p>
                <input type="text" onChange={onChange} name="price" value={price}  placeholder={props.product.price} />
                <div className='productdetail_right_button'>
                    <Link to='/app/products'> Go Back </Link> 
                    {
                        (detail?.length === 0 &&  category?.length === 0  &&  price?.length === 0) ? <button className="button_disabled" onClick={onSubmit}> Save </button>
                        :
                        <button onClick={onSubmit}> Save </button>
                    }
                </div>
            </div>
            </div> 
        </div>
    )
}


const mapStateToProps = (state) => ({
    product:state.product.singleproduct
})

export default connect(mapStateToProps, {singleProductDetail, updateSingleProductDetail})(ProductDetail)
