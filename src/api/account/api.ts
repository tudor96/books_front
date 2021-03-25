import {sendGetRequest, sendPostRequest } from 'api/utils';
import {
  BasicUserInformation,
  LoginResponse,

} from './types';
import { api_url } from '../utils/consts';

export default () => ({
  login: async (userInfo: BasicUserInformation): Promise<string> => {
    
    const { data }: LoginResponse = await sendGetRequest(
      api_url + 'api/checkConnection',
    );
    return data;
  },

});
