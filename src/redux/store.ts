import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import {newReducer} from "./newReducer"


let redusers = combineReducers (
    {
        new: newReducer
    }
)

type RedusersType = typeof redusers
export type AppStateType = ReturnType<RedusersType>
let state:AppStateType;

export let store = createStore (redusers, applyMiddleware (thunkMiddleware))
// @ts-ignore

window.store = store;