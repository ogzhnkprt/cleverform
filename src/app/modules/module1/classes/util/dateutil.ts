


export class DateUtil {

    public static getDateFromDateString(datestr: string): Date{     // datestr sample>>> "25/12/2020"
        let date: Date=new Date();
        datestr=datestr.trim();

        let day: number=Number(datestr.split("/")[0]);
        let month: number=Number(datestr.split("/")[1])-1;
        let year: number=Number(datestr.split("/")[2]);

        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year); 
        date.setHours(0);
        date.setMinutes(0);
      
        return date;
    }    
   
    
    public static getDateFromFullDateString(datestr: string): Date{     // datestr sample>>> "25/12/2020 11:30"  or "25/12/2020 11:30:00"
        let date: Date=new Date();
        datestr=datestr.trim();
        let parts: string[]=datestr.split(" ");
        let part1: string=parts[0].trim();
        let part2: string=parts[1].trim();

        let day: number=Number(part1.split("/")[0]);
        let month: number=Number(part1.split("/")[1])-1;
        let year: number=Number(part1.split("/")[2]);
        let hours: number=Number(part2.split(":")[0]);
        let minutes: number=Number(part2.split(":")[1]);

        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year); 
        date.setHours(hours);
        date.setMinutes(minutes);
      
        return date;
    }


    public static getStringFromDate(date: Date): string{     // datestr sample>>> "25/12/2020"
        let day: number = date.getDate();
        let month: number = date.getMonth() + 1; //Month from 0 to 11
        let year: number = date.getFullYear();
        //return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
        return '' +  (day <= 9 ? '0' + day : day) + '/' +  (month<=9 ? '0' + month : month)  + '/' +  year  ;
    }
    
    public static getFullStringFromDate(date: Date): string{     // datestr sample>>> "25/12/2020 11:30:00"
        let day: number = date.getDate();
        let month: number = date.getMonth() + 1; //Month from 0 to 11
        let year: number = date.getFullYear();
        let hours: number = date.getHours();
        let minutes: number = date.getMinutes();
        return '' +  (day <= 9 ? '0' + day : day) + '/' +  (month<=9 ? '0' + month : month)  + '/' +  year 
                  + ' '  + (hours <= 9 ? '0' + hours : hours) + ':' + (minutes <= 9 ? '0' + minutes : minutes) + ':00';
    } 





    public static getHhMmStringFromFullDateString(datestr: string): string{     // datestr sample>>> "25/12/2020 11:30"  or "25/12/2020 11:30:00"  to "11:30"
        datestr=datestr.trim();
        let part2: string=datestr.split(" ")[1].trim();
        return part2.split(":")[0]+":"+part2.split(":")[1];
    }    

}//END.