import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "./4_reducers";
import {} from "./5_middlewares";
//import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./6_rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: counterReducers,
  preloadedState: {
    counter: 0,
    counter2: 0,
    product: null,
  },
  middleware: () => [sagaMiddleware],
  devTools: false,
});

sagaMiddleware.run(rootSaga);

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
