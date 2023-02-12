/* eslint-disable @typescript-eslint/no-explicit-any */
import { error500Response, created200Response } from "../../utils/response";
import { IControllers, IHttpRequest, IHttpResponse } from "../interfaces";
import { ICreateUserparams, ICreateUserRepository } from "./interfaces";

export class CreateUserController implements IControllers {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(req: IHttpRequest<ICreateUserparams>): Promise<IHttpResponse> {
    try {
      const user = await this.createUserRepository.create(req.body);

      return created200Response(user);
    } catch (error: any) {
      return error500Response(`Error: ${error.message}`);
    }
  }
}
