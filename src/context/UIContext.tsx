import {createContext, Dispatch, useReducer} from "react";

type ALERT_TYPE = {
    visible: boolean,
    type: string,
    message: string
}
type ALERT_TYPE_CONTEXT = {
    setAlertState: Dispatch<ACTION_TYPE>
} & ALERT_TYPE;

const INITIAL_STATE: ALERT_TYPE = {
    visible: false,
    message: '',
    type: ''
}

type ACTION_TYPE = {
    type: 'CHANGE',
    payload: {
        visible: boolean;
        type: string;
        message: string;
    };
}

export const UIContext = createContext({} as ALERT_TYPE_CONTEXT)
const uiReducer = (state: ALERT_TYPE, action: ACTION_TYPE) => {
    switch (action.type) {
        case "CHANGE":
            const newState = {
                ...state,
                message: action.payload.message,
                visible: !state.visible,
                type: action.payload.type
            }
            console.log(newState)
            return newState
        default:
            return state
    }
}

export const UIProvider = ({children}: { children: React.ReactNode }) => {
    const [alertState, setAlertState] = useReducer(uiReducer, INITIAL_STATE)
    return (
        <UIContext.Provider value={{
            visible: alertState.visible,
            type: alertState.type,
            message: alertState.message,
            setAlertState
        }}>
            {children}
        </UIContext.Provider>
    )
}