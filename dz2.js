function pad(line, qnty, sign, mean) {
    let result;
    let lineLength = line.length;
    let e = sign;


    if (lineLength < qnty && sign !== null) {
        for (let i = 0; i < qnty; i++) {
            
            if (sign.length < qnty) {
                sign += e;
            }
        }
    }
    else if (qnty <= lineLength) {
        console.log("Reqest: ", line);
    }

    if (sign !== null) {
        sign = sign.slice(0, qnty - lineLength);

        if (mean === true && qnty > lineLength) {
            result = sign + line;
            console.log("Reqest: ", result);
        } else if (mean === false && qnty > lineLength) {
            result = line + sign;
            console.log("Reqest: ", result);
        }
    }
    else
        console.log("Reqest: ", line);

}




pad("ffff", 2, "absssssssssssss", true);
pad("ffff", 100, null, true);
pad("ffff", 100, "absssssssssssss", false);
pad("ffff", 5, "absssssssssssss", true);