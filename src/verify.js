const delete_hyphen = function (text) {
    return text.replace(/-/g, "");
}

const weighted_sum = function (text, type = "num") {
    let weighted_sum_val = "";

    if (text.length === 10) {
        let j = 10;
        for (let i = 0; i <= 8; i++) {
            weighted_sum_val += `${text[i]}*${j}+`;
            j -= 1;
        }
        weighted_sum_val = weighted_sum_val.substring(0, weighted_sum_val.length - 1);//减去末尾字符"+"
    } else if (text.length === 13) {
        for (let i = 0; i <= 11; i++) {
            weighted_sum_val += i % 2 === 0 ? `1*${text[i]}+` : `3*${text[i]}+`;
        }
        weighted_sum_val = weighted_sum_val.substring(0, weighted_sum_val.length - 1);
    }

    return type === "text" ? weighted_sum_val : eval(weighted_sum_val);
}

const verify = function (isbn) {
    if (isbn.length === 13) {
        var check_code = 10 - (weighted_sum(delete_hyphen(isbn)) % 10);
    }else if(isbn.length===10){
        var check_code = 11 - (weighted_sum(delete_hyphen(isbn)) % 11);
    }else{
        var check_code="Non-standard!";
    }

    return check_code==isbn[isbn.length-1]?true:false;
}

module.exports = {
    verify:verify,
    weight:weighted_sum
};