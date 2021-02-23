import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { AxiosError } from 'axios';

@Injectable()
export class SetErrorService {
  execute(error: AxiosError) {
    switch (error.response.status) {
      case 400: {
        throw new BadRequestException(
          'Os dados da requisição não estão compatíveis com os dados esperados pela API',
          error.response.data.errors,
        );
      }
      case 401: {
        throw new UnauthorizedException(
          'O usuário informado não está autenticado na aplicação.',
          error.response.data.errors,
        );
      }
      case 403: {
        throw new NotFoundException(
          'O usuário informado não possui permissão para realizar esta requisição.',
          error.response.data.errors,
        );
      }
      case 404: {
        throw new NotFoundException(
          'Recurso não encontrado.',
          error.response.data.errors,
        );
      }
      case 409: {
        throw new ConflictException(
          'Usuário já cadastrado.',
          error.response.data.errors,
        );
      }
      case 422: {
        throw new UnprocessableEntityException(
          'Algum parâmetro informado é inválido ou está em outro padrão.',
          error.response.data.errors,
        );
      }
      case 500: {
        throw new InternalServerErrorException(
          'Erro interno do servidor.',
          error.response.data.errors,
        );
      }
    }
  }
}
