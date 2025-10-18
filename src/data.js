export const API_KEY='AIzaSyB_fISfnESU9R6rGWAX5-cvuT4mdo2WWto';//API Key

export const value_converter=(val)=>{
    if(val>=1000000){
        return Math.floor(val/1000000)+"M";
    }else if(val>=1000){
        return Math.floor(val/1000)+"K";
    }else{
        return val;;
    }
}