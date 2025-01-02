import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dataReducer from '../features/data/dataSlice.ts'
import configurationReducer from '../features/configuration/configurationSlice.ts'

const rootReducer = combineReducers({
    configurationReducer, dataReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
