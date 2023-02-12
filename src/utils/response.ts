import { IHttpResponse } from "../controllers/interfaces";
import { IUser } from "../models/user";

export const okResponse = (body: IUser | IUser[]): IHttpResponse => {
  return {
    statusCode: 200,
    body: body,
  };
};

export const created200Response = (body: IUser): IHttpResponse => {
  return {
    statusCode: 201,
    body,
  };
};

export const error400Response = (body: string): IHttpResponse => {
  return {
    statusCode: 400,
    body,
  };
};

export const error500Response = (body: string): IHttpResponse => {
  return {
    statusCode: 500,
    body,
  };
};
