import * as ResortAPI from '../util/resorts_api_util';

export const RECEIVE_RESORTS = "RECEIVE_RESORTS";
export const RECEIVE_RESORT = "RECEIVE_RESORT";

const receiveResorts = (resorts) => ({
  type: RECEIVE_RESORTS,
  resorts
});

const receiveResort = (resort) => ({
  type: RECEIVE_RESORT,
  resort
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
