import { Consolidated } from '../infra/mongoose/models/consolidated';

export default interface IConsolidatedRepository {
  find(): Promise<Consolidated[]>;
  create(model: any): Promise<Consolidated>;
}
