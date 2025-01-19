
export function myParseInt(strNum) {
    let res = NaN;
    let sign = 1;
    if(strNum != null && strNum != undefined) {
        let index = 0;
        
        strNum = strNum.toString();
        strNum = strNum.trim();
        if(strNum[0] == '-'){
            index++;
            sign = -1;
        } else if(strNum[0] == '+') {
            index++;
        }
        if(index < strNum.length && !isNaN(getDigit(strNum[index]))) {
            res = 0;
            let running = true;
            while(index < strNum.length && running) {
                let digit = getDigit(strNum[index]);
                if (isNaN(digit)) {
                    running = false;
                } else {
                    res = res * 10 + digit;
                    index++;
                }
                
            }
           
        }

    }
    return res *= sign;
}
function getDigit(digitStr) {
    let res = digitStr >= '0' && digitStr <= '9' ? +digitStr : NaN;
    return res;
}

export function myToStringFromIntNumber(number) {
    //TODO returns string presentation of the given number
    // if number has type of string, the string should contain a number matching the parseInt syntax
    // examples:
    //myToStringFromIntNumber(12.35) -> returns "12"
    //myToStringFromIntNumber("12.35") -> returns "12"
    //myToStringFromIntNumber() -> returns "" (empty string)
    //myToStringFromIntNumber(-12) -> returns "-12"
    //myToStringFromIntNumber(+12) -> return "12"
    //myToStringFromIntNum("a1") -> returns ""
    //myToStringFromInt("1a") -> returns "1"
    //Disallowed the following operations:
    //toString() using
    //constructor String
    
    //operator + with emty string like "" + for conversion purposes, but actual ccncatination od strings is a permitted operation
    //"" + number is disallowed but "" + string is allowed
    //"" + "1" permitted
    //"" + 1 is not so good
    // let res = "";
    // res + number % 10
}



