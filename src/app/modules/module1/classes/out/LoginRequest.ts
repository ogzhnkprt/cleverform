
import { City } from '../models/city';

export class LoginRequest  {
    public username: string;
    public password: string;
    public gender: string;
    public identityNo: string;
    public city: City;
}