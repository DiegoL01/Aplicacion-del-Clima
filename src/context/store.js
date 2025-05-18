import { configureStore } from "@reduxjs/toolkit";
import pronosticoReducer from "./pronosticoContext";

export const store = configureStore({
    reducer : {
      pronostico : pronosticoReducer,
      
    }
})