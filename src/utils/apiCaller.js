import * as Config from '../configs/api';
import axios from 'axios';

export const callApi = (
  endpoint = '',
  method = 'GET',
  body = null,
  token = '',
) => {
  try {
    let configs = {
      method: method,
      url: `${Config.BASE_URL}/${endpoint}`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
    return axios(configs);
  } catch (e) {
    console.log(e);
  }
};