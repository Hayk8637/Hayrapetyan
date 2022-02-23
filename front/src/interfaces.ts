import {Identifiers} from '@angular/compiler';

export interface Load {
  loadId: Identifiers;
  customer: {
    name: string,
    mc: string,
    referenceNumber: string,
    rate: number,
    contact: string
  };
  carrier: {
    name: string,
    mc: string,
    rate: number,
    contact: string
  };
  pickUp: {
    date: string,
    time: string,
    name: string,
    address: string,
    city: string,
    zip: number
};
  delivery: {
    date: string,
    time: string,
    name: string,
    address: string,
    city: string,
    zip: number
};
  loadInfo: {
    weight: number,
    commodity: string,
    type: string,
    distance: number
  };
}
export interface Agent {
  agentId: Identifiers;
  isAdmin: boolean;
  name: string;
  surname: string;
  email: string;
  password: string;

}
