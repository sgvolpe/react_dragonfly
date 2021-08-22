import { configureStore } from '@reduxjs/toolkit';

// import itinerariesReducer from './itineraries';
import uiReducer from './ui-slice';
import resultsReducer from './results-slice';


const store = configureStore({
  reducer: {
    //  itineraries: itinerariesReducer, 
    results: resultsReducer, 
     ui: uiReducer },
});

export default store;