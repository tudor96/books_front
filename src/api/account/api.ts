import { sendGetRequest, sendPostRequest } from 'api/utils';
import { BasicUserInformation, LoginResponse } from './types';
import { api_url } from '../utils/consts';

export default () => ({
  login: async (userInfo: BasicUserInformation): Promise<string> => {
    const { data }: LoginResponse = await sendGetRequest(
      api_url + '/api/checkConnection'
    );
    return data;
  },
  insertBooks: async (): Promise<string> => {
    const { data }: LoginResponse = await sendPostRequest(
      api_url + '/api/books',
      ''
    );
    return data;
  },
  getBooksAggregate: async (): Promise<string> => {
    const { data }: LoginResponse = await sendGetRequest(
      api_url + '/api/booksAgreggate'
    );
    return data;
  },
});
