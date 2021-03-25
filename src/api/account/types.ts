import { AxiosResponse } from 'axios';

export interface BasicUserInformation {
  email: string;
  password: string;
}

export interface LoginResponse extends AxiosResponse {
  data: string;
}
