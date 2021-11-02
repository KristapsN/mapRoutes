import axios from 'axios';
import { Dispatch } from 'redux';
import { MAPON_API_KEY } from '../credentials';

const urlBase = 'https://mapon.com/api/v1/';
// @ts-ignore
export const fetchMap = (data) => ({
  type: 'SET_API',
  data,
});

export const fetchMapData = () => async (dispatch: Dispatch) => {
  const data = await axios.get(`${urlBase}unit/list.json?key=${MAPON_API_KEY}`);
  dispatch(fetchMap(data.data.data));
};
