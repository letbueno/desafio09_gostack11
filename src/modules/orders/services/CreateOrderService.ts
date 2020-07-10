import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const checkCustomerExist = await this.customersRepository.findById(
      customer_id,
    );

    if (!checkCustomerExist) {
      throw new AppError("This customer doesn't exist.");
    }
    const customer = checkCustomerExist;

    const mapProductsID = products.map(product => {
      return { id: product.id };
    });

    const productsItems = await this.productsRepository.findAllById(
      mapProductsID,
    );

    if (productsItems.length !== products.length) {
      throw new AppError('This product is missing.');
    }

    const productsOrder = productsItems.map(productItem => {
      const productsList = products.find(
        productFind => productFind.id === productItem.id,
      );

      if (!productsList) {
        throw new AppError('This product not found.');
      }

      if (productItem.quantity < productsList.quantity) {
        throw new AppError('This product out of stock.');
      }

      return {
        product_id: productItem.id,
        price: productItem.price,
        quantity: productsList?.quantity,
      };
    });

    console.log(productsOrder);

    const order = await this.ordersRepository.create({
      customer,
      products: productsOrder,
    });

    await this.productsRepository.updateQuantity(products);

    return order;
  }
}

export default CreateOrderService;
