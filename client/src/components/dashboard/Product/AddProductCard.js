import React, { Component,Fragment, useState } from 'react'
import { connect } from 'react-redux'
import './AddProductCard.css'
import Checkbox from '@material-ui/core/Checkbox';


export const AddProductCard = ({serial,detail,category,price}) => {

    const [checked, setChecked] = React.useState(true);

    const [formData, setFormData] = useState({
        card1: "check"
      });
    
    const { card1 } = formData;
    
    const onChange2 = e =>{
        console.log(e.target.name, e.target.value )
        let opposite
        opposite = e.target.value === 'check' ? 'notCheck' : 'check'
        setFormData({ ...formData, [e.target.name]: opposite });
        console.log(serial)
    }


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    

    return (
        <div className='addproduct_card_main'>
        <Checkbox
                defaultChecked
                onChange={handleChange}
                onClick={onChange2}
                name='card1'
                value={card1}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
        {
            checked ?
        <div className='addproduct_card'>
                    <div className='addproduct_card_single'>
                    <p>Product Name</p>
                    <input />
                    </div>
                    <div className='addproduct_card_single'>
                        <p>Product Category</p>
                        <input />
                    </div>
                    <div className='addproduct_card_single'>
                        <p>Tax Group</p>
                        <p>Zero Tax Group</p>
                    </div>
                    <div className='addproduct_card_single'>
                        <p>Price</p>
                        <input />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProductCard)
