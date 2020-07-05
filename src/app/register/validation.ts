import { FormGroup } from "@angular/forms";

export function ConfirmPass( group :FormGroup){
    // obtain password and confirm password
    // console.log(group)
    let password = group.value.Password;
    let conpass = group.value.confirmPassword;

    // console.log(password)
    // console.log(conpass)

    // compare and return
 
    return password == conpass ? null: {'custom' : true}
}