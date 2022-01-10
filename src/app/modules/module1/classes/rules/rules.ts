import  { Caution } from '../models/caution';
import  { LoginRequest } from '../out/LoginRequest';

import  { Login001 } from './login/login001';



export class Rules {

    public static checkLogin001(cautions: Caution[], loginRequest: LoginRequest): void{
        new Login001().check(cautions,loginRequest);        
    }    


}//END.