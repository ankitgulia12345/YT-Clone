export const API_KEY = "AIzaSyC8APe9h8-nDf7Sj2Aqv0nMIYFAwR0X6Qw";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}