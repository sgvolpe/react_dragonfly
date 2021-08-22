import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";




const initialState = {
    status: 'finished',
    ori: 'AAA',
    des: 'BBB',
    dep: '2021-03-31',
    tripType: null,
    itemsCount: 0,
    
    items: [
      // { id: "1", title: "Test Item", quantity: 1, total: 18, price: 6 },
    ],
  };


  const itinerariesSlice = createSlice({
      name: 'itineraries',
      initialState: initialState,
      reducers: {
          update(state, action){
            if (action.payload.ori) {state.ori = action.payload.ori};
            if (action.payload.des) {state.des = action.payload.des};
          },
          // initialize(state, action){
          //   console.log('initialize')
          //   state.ori = action.payload.ori;
          //   state.des = action.payload.des;
          //   state.p = action.payload.p;
          //   state.tripType = action.payload.tripType;
          //   state.items = action.payload.itineraries;
          //   state.itemsCount = action.payload.itineraries.length;
          // },
          setItineraries(state, action){
            state.items = action.payload;

          }
          
      }
  });

  // const query = useCallback(async (searchParams) => {
  //   setStatus("pending");
  //   const url = `http://127.0.0.1:5000/shop/?ori=${searchParams.ori}&des=${searchParams.des}&dates=${searchParams.dep}`;
  //   console.log(`Searching: ${url}`);
  //   // const response = await fetch(url).then();
  //   // const data = await response.json();
  //   // const transformedData = Object.keys(data).map((k) => ({
  //   //   ...data[k],
  //   //   key: k,
  //   // }));
  //   // const returnedItineraries = Object.values(transformedData);
  //   // setItineraries(returnedItineraries);
    
  //   // localStorage.setItem('itineraries', JSON.stringify(Object.values(returnedItineraries)));
  //   // setStatus("finished");
  // });


  
  export const getItinerariesData = (searchParams) => {
    
    const storedOri = localStorage.getItem('ori');
    const storedDes = localStorage.getItem('des');
    const storedDep = localStorage.getItem('dep');
    const storedItineraries = JSON.parse(localStorage.getItem('itineraries'));
    return async (dispatch) => {

      dispatch(
        uiActions.setStatus({
          status: "pending"
         
        })
      );
     
  
      const sendRequest = async () => {
        const url = `http://127.0.0.1:5000/shop/?ori=${searchParams.ori}&des=${searchParams.des}&dates=${searchParams.dep}`
        console.log(`querying... ${url}`)
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Sending Cart info failed.");
        }else{
          console.log('Response ok.')
          const data = await response.json();
          const transformedData = Object.keys(data).map((k) => ({
            ...data[k],
            key: k,
          }));
          const returnedItineraries = Object.values(transformedData);
          dispatch(itinerariesActions.setItineraries(returnedItineraries));
          return returnedItineraries;
        
      }
      };
      if (searchParams.ori !== storedOri || searchParams.des !== storedDes || searchParams.dep !== storedDep
        //  || 
        // storedItineraries === null || storedItineraries.length === 0
        ) 
        {
        localStorage.setItem('ori', searchParams.ori);
        localStorage.setItem('des', searchParams.des);
        localStorage.setItem('dep', searchParams.dep);
        console.log('Local storage updated')
        try {
          const returnedItineraries = await sendRequest();        
          localStorage.setItem('itineraries', JSON.stringify(Object.values(returnedItineraries)));
        } catch (error) {
          console.log(error)
        }
      }else{
          dispatch(itinerariesActions.setItineraries(storedItineraries));
          console.log('gotem from local storage')
      }
      dispatch(
        uiActions.setStatus({
          status: "finished"
        })
      );
      
    };
    
  };
  
  export const sortItineraries = (itins, ascending, by) => {
    console.log("Sorting...");
    console.log(itins);
    console.log(ascending);
    console.log(by);
    console.log(typeof itins);
    return itins.slice().sort((itinA, itinB) => {
      if (ascending) {
        return itinA[by] >= itinB[by] ? 1 : -1;
      } else {
        return itinA[by] < itinB[by] ? 1 : -1;
      }
    });
  };

  export const itinerariesActions = itinerariesSlice.actions;
  export default itinerariesSlice.reducer;

