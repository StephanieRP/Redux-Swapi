import axios from "axios";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      // console.log(res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data.results
      });
    })
    .catch(err => {
      // console.log(err);
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: err
      });
    });
};
