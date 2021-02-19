export class Register {
  constructor(public name: String, public email: String, public phone: Number, public password: String) { }
}

export interface Register2 {
  name: String,
  email: String,
  phone: Number,
  password: String
}
