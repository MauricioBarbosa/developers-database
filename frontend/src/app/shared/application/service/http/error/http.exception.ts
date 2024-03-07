import { ExceptionBase } from '../../../error/exception.base';

export class ResponseHasNoBodyException extends ExceptionBase {
  readonly code = 'RESPONSE.HAS.NO.BODY';

  constructor(message?: string, metadata?: unknown) {
    super(message, metadata);
  }
}
