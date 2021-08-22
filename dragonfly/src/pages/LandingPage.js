
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../components/ui/LoadingSpinner";

import SearchForm from "../components/search/SearchForm";

const LandingPage = () => {
  const status = useSelector(state => state.ui.status)

  return (
   <>
   <h1>LandingPage ...</h1>
  {status === "pending" && (
    <LoadingSpinner />
  )}
  {status !== "pending" && (    <SearchForm></SearchForm> ) };
  
  </>);
};
export default LandingPage;
