import {Control} from '@angular/common'

export class CustomValidators {
    static match(key: string) {
        return (control: Control) => {
            if (control.value && control.root.controls)
                return control.root.controls[key].value !== control.value ? {'match': {'currentValue': ontrol.value,  'requiredValue': control.root.controls[key].value}} : null;
            return null;
        }
    }
}