/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { error500Response, okResponse } from "../../utils/response";
import { IControllers, IHttpRequest, IHttpResponse } from "../interfaces";
import { IGetUserRepository } from "./interfaces";

export class GetUserController implements IControllers {
  constructor(private readonly getUserRepository: IGetUserRepository) {}

  async handle(_req: IHttpRequest<any>): Promise<IHttpResponse> {
    try {
      const user = await this.getUserRepository.getAll();

      return okResponse(user);
    } catch (error: any) {
      return error500Response(`Error: ${error.message}`);
    }
  }
}
