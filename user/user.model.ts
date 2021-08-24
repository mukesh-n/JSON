export class User extends base{
  id: number = 0;
  name: string | null = null;
  date_of_birth: date | null = null;
  address: string | null = null;
  phone_number: number | null = null;
}
export class UserWrapper extends User {}
