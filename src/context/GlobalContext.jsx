import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

const Context = createContext()

export const useGlobalContext = () => {
    return useContext(Context)
}

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <Context.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </Context.Provider>
    )
}