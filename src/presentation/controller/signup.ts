import { MissingParamError } from '../errors/MissingParamError'
import { badRequest } from '../helppers/httpHelper'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse | any {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
