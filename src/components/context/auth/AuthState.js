import React from "react";
import axios from "axios";

const AuthState = () => {
  const initialState = {
    token: localStorage.getItem('token')
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User

  //Register User

  //Login User

  //Logout

  //Clear Errors




  return (
    <AuthContext.Provider
    value={{
      token: state.token,
      token: state.token.isAuthenticated,
      token: state.token,
      token: state.token,
      token: state.token,


    }}
  )
};

export default AuthState;
