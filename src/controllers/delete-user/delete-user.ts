/* eslint-disable @typescript-eslint/no-explicit-any */

import { error500Response, okResponse } from "../../utils/response";
import { IControllers, IHttpRequest, IHttpResponse } from "../interfaces";
import { IDeleteUserRepository } from "./interface";

export class DeleteUserCrontroller implements IControllers {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handle(req: IHttpRequest<any>): Promise<IHttpResponse> {
    try {
      const user = await this.deleteUserRepository.delete(req.params.id);

      return okResponse(user);
    } catch (error: any) {
      return error500Response(`Error: ${error.message}`);
    }
  }
}
