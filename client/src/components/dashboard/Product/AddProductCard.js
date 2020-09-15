import React, { Component,Fragment, useState } from 'react'
import { connect } from 'react-redux'
import './AddProductCard.css'
import Checkbox from '@material-ui/core/Checkbox';
import { addingProduct, maintainingMark } from './../../../actions/product'


export const AddProductCard = ({serial,detail,category,price,mark, addingProduct, maintainingMark}) => {

    const [checked, setChecked] = React.useState(true);

    // const [formData, setFormData] = useState({
    //     card1: "check"
    // });
    
    // const { card1 } = formData;
    
    const onChange2 = e =>{
        console.log(serial, e.target.value )
        let opposite
        opposite = e.target.value === 'marked' ? 'notMarked' : 'marked'
        console.log(opposite)
        // setFormData({ ...formData, [e.target.name]: opposite });
        // console.log(serial)

        maintainingMark({serial, opposite })
    }


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const changingProductData = (e) => {
        console.log(serial, e.target.name, e.target.value)
        addingProduct({serial, detail:e.target.name, value:e.target.value})
    }
    

    return (
        <div className='addproduct_card_main'>
        <Checkbox
                defaultChecked
                onChange={handleChange}
                onClick={onChange2}
                name='card1'
                value={mark}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
        {
            checked ?
        <div className='addproduct_card'>
                    <div className='addproduct_card_single'>
                    <p>Product Name</p>
                    <input value={detail} name="detail" onChange={changingProductData}/>
                    </div>
                    <div className='addproduct_card_single'>
                        <p>Product Category</p>
                        <input value={category} name="category" onChange={changingProductData}/>
                    </div>
                    <div className='addproduct_card_single'>
                        <p>Tax Group</p>
                        <p>Zero Tax Group</p>
                    </div>
                    <div className='addproduct_card_single'>
                        <p>Price</p>
                        <input value={price} name="price"  onChange={changingProductData}/>
                    </div>
        </div>
        :
        <p>Not Show</p>
        }
    
    </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, {addingProduct, maintainingMark})(AddProductCard)
