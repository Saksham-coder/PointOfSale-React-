import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Login  from './auth/Login'
import Signup  from './auth/Signup'
import Dashboard from './dashboard/Dashboard'
import Sell from './dashboard/Sell'
import Navbar from './Navbar'
import {Redirect} from 'react-router-dom'
import './Main.css'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Main = ({isAuthenticated}) => {
    console.log(isAuthenticated)
    return (
            <div>
            {
                isAuthenticated ? <div>
                 <Redirect to='./app/dashboard' />
                </div>
                :
                <div className='auth'>
                    <div className='auth_heading'>
                        <Link to='/login'  >Login</Link>  
                        <Link to='/signup' >Signup</Link>
                    </div>
                    <div className='auth_first'>
                        <div className='auth_first_left'>
                            <img src="https://res.cloudinary.com/dwtukksqy/image/upload/v1600181024/Restaurant_POS_Software_for_Guaranteed_Growth___Free_Trial_Demo_and_1_more_page_-_Profile_1_-_Microsoft_Edge_9_15_2020_7_52_09_PM_jryrys.png"
                            alt='' />
                        </div>
                        <div className='auth_first_right'>
                            <h3>Restaurant software</h3>
                            <h3>to manage your business like a</h3>
                            <h3>boss</h3>
                            <span>Billing and Restaurant Point of Sale software to simplify</span>
                            <br></br>
                            <span>operations and maximize profits</span>
                        </div>
                        
                    </div>
                    <div className='auth_second'>
                        <div className='auth_second_a'>
                            <h3>The best cloud-based POS for food outlets.</h3>
                        </div>
                        <div className='auth_second_b'>
                            <div className='auth_second_b_flex'>
                                <img src='https://slickpos.com/wp-content/uploads/2018/07/restaurant-pos.png' alt='' />
                                <p>Restaurant</p>
                            </div>
                            <div className='auth_second_b_flex'>
                                <FreeBreakfastIcon/>
                                <p>Cafe</p>
                            </div>
                            <div className='auth_second_b_flex'>
                                <LocalShippingIcon/>
                                <p>Food Truck</p>
                            </div>
                            <div className='auth_second_b_flex'>
                                <FastfoodIcon/>
                                <p>QSR</p>
                            </div>
                        </div>
                        <div className='auth_second_c'>
                            <p>Be it a restaurant that needs table & kitchen management, or a food truck that needs quick billing, customize SlickPOS to how you run<br></br> your food outlet.</p>
                        </div>
                    </div>
                    <div className='auth_third'>
                        <div className='auth_third_left'>
                            <p>The only software</p>
                            <p>you will need</p>
                            <ul>
                                <li>Point of Sale & Billing</li>
                                <li>Online Orders in POS</li>
                                <li>Kitchen Orders Print & Display</li>
                                <li>Inventory & Recipe</li>
                                <li>Reports & Analytics</li>
                                <li>Digital Receipts</li>
                                <li>Integrated Payments</li>
                            </ul>
                        </div>
                        <div className='auth_third_right'>
                            <img src="https://res.cloudinary.com/dwtukksqy/image/upload/v1600184739/Restaurant_POS_Software_for_Guaranteed_Growth___Free_Trial_Demo_and_2_more_pages_-_Profile_1_-_Microsoft_Edge_9_15_2020_9_11_07_PM_rov0ei.png"
                            alt='' />
                        </div>
                    </div>
                    <div className='auth_fourth'>
                        <p>Get started now, try a live demo.</p>
                        <span>Free on-boarding support. No credit card required.</span>
                        <br></br>
                        <div className='auth_fourth_button'>
                        <Link to='/login'  >Get Started Now</Link>  
                        </div>
                    </div>
                    <div className='auth_fifth'>
                        <div className='auth_fifth_a'>
                            &copy; Copyright 2020 By Saksham Gupta
                        </div>
                        <div className='auth_fifth_b'>
                            <FacebookIcon/>
                            <YouTubeIcon/>
                            <InstagramIcon/>
                            <PinterestIcon/>
                        </div>
                    </div>
                </div>
            }
            </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Main)