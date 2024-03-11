import {showError} from "./warner";

export function validate(y) {
    let flag = true;
    let error_message = "";

    if (!(parseInt(y) > -5 && parseInt(y) < 5) || (y.trim().search(/[^0-9.-]/) !== -1) || y.trim() === "") {
        flag = false;
        error_message += "You can use Y only in range (-5 ... 5)<br>";
    }

    if (!flag) {
        showError(error_message);
    }

    return flag;
}