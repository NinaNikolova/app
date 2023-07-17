import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordCtrOne: string, passwordCtrTwo: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const pass1 = group.get(passwordCtrOne);
        const pass2 = group.get(passwordCtrTwo)
        return pass1?.value === pass2?.value ? null : { matchPasswordsValidator: true }
    }
}