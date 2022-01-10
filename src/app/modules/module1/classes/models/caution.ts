

export class Caution {
    public exp: string;
    public severity: string; 
    public code?: string;
    public pointer?: string;                 
     

    public static getCautionByExp(exp: string, pointer: string, severity: string): Caution{
        let caution: Caution=new Caution();
        caution.exp=exp;
        caution.pointer=pointer;
        caution.severity=severity;       
        return caution;
    }

 
}//END.