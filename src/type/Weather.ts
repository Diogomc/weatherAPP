export type Weather = {
    location: {
        tz_id:string
        name:string
        region:string
        country:string
    },
    current:{
        temp_c:any;
        condition:{
            text:string
            icon:string
        }
    }
    
    
}