import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Login  from './auth/Login'
import Signup  from './auth/Signup'
import Dashboard from './dashboard/Dashboard'
import Sell from './dashboard/Sell'
import Navbar from './Navbar'
import {Redirect} from 'react-router-dom'


const Main = ({isAuthenticated}) => {
    console.log(isAuthenticated)
    return (
            <div>
            {
                isAuthenticated ? <div>
                 <Redirect to='./app/dashboard' />
                </div>
                :<div><p>Auth component</p>
                <Link to='/login'  >Login</Link>  
                <Link to='/signup' >Signup</Link> 
            </div>
            }
            </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Main)