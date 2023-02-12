/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "../models/user";

export interface IHttpResponse {
  statusCode: number;
  body: IUser | IUser[] | string;
}

export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body: B;
}

export interface IControllers {
  handle(req: IHttpRequest<unknown>): Promise<IHttpResponse>;
}
