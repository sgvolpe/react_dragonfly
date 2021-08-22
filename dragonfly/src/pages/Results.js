
import {  useSelector } from "react-redux";

import LoadingSpinner from "..//components/ui/LoadingSpinner"



const Results = () => {
    const status = useSelector(state => state.ui.status);
    const results = useSelector(state => state.results);

    return (
    <>    
        <h1>Results</h1>    
        {status === "pending" && (
          <LoadingSpinner />
        )}
        {status !== "pending" && (
            `${results.resultsCount } options found`
        ) }
    </>
    )
};

export default Results;