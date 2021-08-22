

import { useHistory } from "react-router-dom";

const SearchForm = () => {
    const history = useHistory();

    const onSubmit = (values) => {
        console.log("click")
        history.push(`/results?`);
      };

    return (         <>
        <h1>Search Form</h1>
        <form onSubmit={onSubmit}>
            <label>Origin: </label>
            <input type="text" name="ori"></input>
            <label>Destination: </label>
            <input type="text" name="des"></input>
            <button type="submit" value="Search">Search</button>
        </form>
        </>     )
};

export default SearchForm;