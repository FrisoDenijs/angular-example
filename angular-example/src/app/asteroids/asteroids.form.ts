import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AsteroidRequest } from '../shared';


const datePattern = /([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/;

export class AsteroidsForm extends FormGroup {
    constructor() {
        super({
            startDate: new FormControl('', Validators.pattern(datePattern)),
            endDate: new FormControl('', Validators.pattern(datePattern)),
            apiKey: new FormControl('')
          });
    }

    getModel(): AsteroidRequest {
        const model = new AsteroidRequest();

        model.startDate = this.value.startDate;
        model.endDate = this.value.endDate;
        model.apiKey = this.value.apiKey;

        return model;
    }
}

