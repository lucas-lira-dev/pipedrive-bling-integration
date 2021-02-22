import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AxiosError } from 'axios';

@Injectable()
export class SetErrorService {
  execute(error: AxiosError) {
    switch (error.response.status) {
      case 401: {
        throw new UnauthorizedException(
          'O usuário informado não está autenticado na aplicação.',
        );
      }
      case 403: {
        throw new ForbiddenException(
          error?.response?.data?.message ||
            'O usuário informado não possui permissão para realizar esta requisição.',
        );
      }
      case 404: {
        throw new NotFoundException('Recurso não encontrado.');
      }
      case 422: {
        throw new UnprocessableEntityException(
          'Algum parâmetro informado é inválido ou está em outro padrão.',
          error.response.data.errors,
        );
      }
    }
  }
}
