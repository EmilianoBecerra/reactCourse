import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "./4_reducers";
import {} from /* logger */ "./5_middlewares";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: counterReducers,
  preloadedState: {
    counter: 0,
    counter2: 0,
  },
  middleware: () => [thunk],
  devTools: false,
});

/* 
Manera anterior crear store redux(deprecado);

import { createStore } from "./redux";
import { counterReducers } from "./reducers";

export const store = createStore(

    counterReducers(), 
    {
        counter: 0
    }

) */
