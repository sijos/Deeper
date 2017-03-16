import * as ResortAPI from '../util/resorts_api_util';

export const RECEIVE_RESORTS = "RECEIVE_RESORTS";

const receiveResorts = (resorts) => ({
  type: RECEIVE_RESORTS,
  resorts
});

export const fetchResorts = () => (dispatch) => (
  ResortAPI.fetchResorts().then(
    resorts => dispatch(receiveResorts(resorts))
  )
);
