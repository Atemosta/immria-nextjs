import getEnv from './getEnv';
import { API_URL } from '../config';

const environment = getEnv();

const getApiEndPoint = () => {
  const url = API_URL[environment];
  console.log("getApiEndPoint: " + url);
  return url;
};

export default getApiEndPoint;