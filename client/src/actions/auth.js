import axios from 'axios'
import _ from 'lodash'

export const loadUser = () => async dispatch => {
    try {
        const id = localStorage.getItem('x-auth-token');
      const res = await axios.get(`/api/v1/users/${id}`
  );
      console.log(res)
      dispatch({
        type: "USER_LOADED",
        payload: res.data
      });
      dispatch({
          type:"PRODUCT_LOADED",
          payload: res.data
      })
      dispatch({
          type:"PRODUCTS_LOADED",
          payload: res.data
      })
    } catch (err) {
      dispatch({
        type: "AUTH_ERROR"
      });
    }
  };

export const login = (email, password) => async dispatch => {

    console.log(email, password)

    const body = { email, password };
  
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = {email, password }

        const res = await axios.post("/api/v1/users/login",
            body,
            config
        )

        localStorage.setItem('x-auth-token', res.data.token);
        // const res = await api.get('/auth');
        console.log(res)

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data
          });
      
        dispatch(loadUser());

    }catch(err){
        console.log("error==>>>", err)
    }

    // try {
    //   const res = await api.post('/auth', body);
  
    //   dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: res.data
    //   });
  
    //   dispatch(loadUser());
    // } catch (err) {
    //   const errors = err.response.data.errors;
  
    //   if (errors) {
    //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    //   }
  
    //   dispatch({
    //     type: LOGIN_FAIL
    //   });
//     }
//   }
}

export const register = ({ name, email, password }) => async dispatch => {
    try {
 
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ username:name, email, password })

        const res = await axios.post("/api/V1/users/signup",
            body,
            config

        )
        console.log(res)
        // dispatch({
        //     type: "REGISTER_SUCCESS",
        //     payload: res.data
        // });
        // dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors)
        dispatch({
            type: "REGISTER_FAIL"
        })
    }
}; 

 export const filtering = ({products, value}) => dispatch => {
    try{
        console.log("LEt me search in this==>>", products, value)
        let searched =[]
         products.map(product => { 
             if (product.details.indexOf(value) >= 0)
             {
             console.log(product.details.indexOf(value) >= 0)
            searched.push(product)
        }});
        console.log(searched)
        dispatch({
            type:"PRODUCT_LOADED",
            payload: {
                products: searched
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const filtering2 = ({category, products}) => dispatch => {
    try{
        console.log("LEt me search in filter==>>", category, products)
        let searched =[]
         products.map(product => { 
             if (product.category === category)
             {
            searched.push(product)
        }});
        console.log(searched)
        dispatch({
            type:"PRODUCT_LOADED",
            payload: {
                products: searched
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const filtering3 = ({products}) => dispatch => {
    try{
        console.log("LEt me search in filter all==>>", products)

        dispatch({
            type:"PRODUCT_LOADED",
            payload: {
                products
            }
        })
    }catch(err){
        console.log(err)
    }
}