import {Dispatch} from 'redux'

let initialState: initialStateType  = {}

export let newReducer = (state: initialStateType  = initialState, action: ActionType): initialStateType  => {
    switch (action.type) {
        case "NEW-TASK": 
            return state         
           
        default: return state;
    }
}
// actions
export const newAC = () => ({ type: "NEW-TASK"} as const) 
 
//thunks

//types
type initialStateType = {

}
type ActionType = | ReturnType <typeof newAC> 
