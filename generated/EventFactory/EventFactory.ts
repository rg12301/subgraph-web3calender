// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class EventCreated extends ethereum.Event {
  get params(): EventCreated__Params {
    return new EventCreated__Params(this);
  }
}

export class EventCreated__Params {
  _event: EventCreated;

  constructor(event: EventCreated) {
    this._event = event;
  }

  get eventAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get stime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get etime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get metadata(): string {
    return this._event.parameters[3].value.toString();
  }

  get attendees(): Array<Address> {
    return this._event.parameters[4].value.toAddressArray();
  }
}

export class EventFactory extends ethereum.SmartContract {
  static bind(address: Address): EventFactory {
    return new EventFactory("EventFactory", address);
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateEventCall extends ethereum.Call {
  get inputs(): CreateEventCall__Inputs {
    return new CreateEventCall__Inputs(this);
  }

  get outputs(): CreateEventCall__Outputs {
    return new CreateEventCall__Outputs(this);
  }
}

export class CreateEventCall__Inputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }

  get stime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get etime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get metadata(): string {
    return this._call.inputValues[2].value.toString();
  }

  get attendees(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }
}

export class CreateEventCall__Outputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }
}
