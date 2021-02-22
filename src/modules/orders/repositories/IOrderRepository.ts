import { Order } from '../infra/mongoose/models/orders';

export default interface IOrderRepository {
  find(): Promise<Order[]>;
  create(model: any): Promise<Order>;
}
