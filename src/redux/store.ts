import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import {newReducer} from "./newReducer"
import { reducer as formReducer } from "redux-form"


let redusers = combineReducers (
    {
        new: newReducer,
        form: formReducer
    }
)

type RedusersType = typeof redusers
export type AppStateType = ReturnType<RedusersType>
let state:AppStateType;

export let store = createStore (redusers, applyMiddleware (thunkMiddleware))
// @ts-ignore

window.store = store;