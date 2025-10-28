export const API_KEY='AIzaSyBi5uVKCJgUzN4XiYOtN8V00IUKJ2ujtqs';//API Key

export const value_converter=(val)=>{
    if(val>=1000000){
        return Math.floor(val/1000000)+"M";
    }else if(val>=1000){
        return Math.floor(val/1000)+"K";
    }else{
        return val;;
    }
}