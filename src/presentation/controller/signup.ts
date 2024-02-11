import { MissingParamError } from '../errors/MissingParamError'
import { badRequest } from '../helppers/httpHelper'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse | any {
    const requeridFields = ['name', 'email', 'password']

    for (const field of requeridFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
