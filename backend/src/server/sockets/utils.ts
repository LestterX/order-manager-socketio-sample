/* eslint-disable @typescript-eslint/no-unused-vars */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';


export class Orders {
  constructor() { }
  getOrders() {
    const orders = readFileSync(path.resolve(__dirname, 'Orders.json'));
    return orders;
  }
}