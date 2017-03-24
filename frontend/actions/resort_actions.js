import * as ResortAPI from '../util/resorts_api_util';

export const RECEIVE_RESORTS = "RECEIVE_RESORTS";
export const RECEIVE_RESORT = "RECEIVE_RESORT";
export const CLEAR_RESORT_DATA = "CLEAR_RESORT_DATA";

const receiveResorts = (resorts) => ({
  type: RECEIVE_RESORTS,
  resorts
});

const receiveResort = (resort) => ({
  type: RECEIVE_RESORT,
  resort
});

export const clearResortData = () => ({
  type: CLEAR_RESORT_DATA
});

export const fetchResorts = () => (dispatch) => (
  ResortAPI.fetchResorts().then(
    resorts => dispatch(receiveResorts(resorts))
  )
);

export const fetchResort = (id) => (dispatch) => (
  ResortAPI.fetchResort(id).then(
    resort => dispatch(receiveResort(resort))
  )
);


export const findResorts = (query) => (dispatch) => (
  ResortAPI.findResorts(query).then(
    resorts => dispatch(receiveResorts(resorts))
  )
);
