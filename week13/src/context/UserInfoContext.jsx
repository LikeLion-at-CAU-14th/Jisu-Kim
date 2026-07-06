import React, { createContext, useReducer } from 'react'

export const UserInfoContext = createContext();

const initialState = { name : "", email : "", birth : "", gender : "",};

const userInfoReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE':
            return action.payload;
        default:
            return state;
    }
}

export const UserInfoProvider = ({children}) => {
    const [state, dispatch] = useReducer(userInfoReducer, initialState);

    return (
        <UserInfoContext.Provider value={{state, dispatch}}>
            {children}
        </UserInfoContext.Provider>
    )
}