/* eslint-disable @typescript-eslint/no-explicit-any */
import { error500Response, okResponse } from "../../utils/response";
import { ICreateUserparams } from "../create-user/interfaces";
import { IControllers, IHttpRequest, IHttpResponse } from "../interfaces";
import { IUpdateUserRepository } from "./interface";

export class UpdateUserControllers implements IControllers {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(req: IHttpRequest<ICreateUserparams>): Promise<IHttpResponse> {
    try {
      const id: string = req.params.id;

      const user = await this.updateUserRepository.update(id, req.body);

      return okResponse(user);
    } catch (error: any) {
      return error500Response(`Error: ${error.message}`);
    }
  }
}
