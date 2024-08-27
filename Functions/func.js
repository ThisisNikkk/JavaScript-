const isLeap = (year) => {
    if(year % 4 == 0){
        if(year % 100 != 0) return "Leap year";
        else(year % 400 == 0); return " Leap Year";
    }
    else return "Not Leap Year"
}

console.log(isLeap(1969))