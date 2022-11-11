import * as React from "react";
import { useContext } from "react";

export const initialState = {
    loading: true,
    purchase: {
        list: [],
        deleteId: [],
    },
};

export const ActionTypes = {
    SetLoading: "SET_LOADING",
    SetPurchase: "SET_COMPRA",
    SetPurchaseList: "SET_COMPRA_LISTA",
    SetPurchaseDeleteId: "SET_COMPRA_ELIMINAR_ID",
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetLoading:
            return {
                ...state,
                loading: action.value,
            };
        case ActionTypes.SetPurchase:
            return {
                ...state,
                purchase: action.value,
            };
        case ActionTypes.SetPurchaseList:
            return {
                ...state,
                purchase: {
                    ...state.purchase,
                    list: [...state.SetPurchaseList, action.value],
                }
            };
        case ActionTypes.SetPurchaseDeleteId:
            return {
                ...state,
                purchase: {
                    ...state.purchase,
                    list: state.SetPurchaseList.filter((product) => product.id !== action.value)
                }
            };
        default:
            return state;
    }
};

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;
}

export const useContextState = () => useContext(Cont);