import { FormGroup, FormControl, Validators } from '@angular/forms';

export class LoginForm extends FormGroup {
    constructor() {
        super({
            userName: new FormControl('', Validators.minLength(2)),
            password: new FormControl('')
          });
    }

    getModel(): LoginData {
        if (this.valid) {
            var data = new LoginData;

            data.userName = this.value.userName;
            data.password = this.value.password;

            return data;
        }
    }
}

export class LoginData {
    userName: string;
    password: string;
}