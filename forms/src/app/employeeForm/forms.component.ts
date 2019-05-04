import { Component } from '@angular/core';
import { Employee } from '../models/form.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../service/formPoster.service';

@Component({
    selector: 'app-form',
    templateUrl: './forms.component.html'
})

export class EmployeeFormComponent {
    languages: any[] = ['Angular', 'React', 'Node'];
    hasCodelangError: boolean = false;
    model = new Employee('John', 'Bill', 'a@a.com', '12345', true, 'male', 'Angular');

    constructor( private formposter: FormPosterService) {}
    formSubmit(form: NgForm) {
        console.log('data in ts>>>>', form.value);
        this.formposter.postEmployee(form.value)
            .subscribe((res) => console.log(' data submitted'));
    }

    validateCodeLang(event:string): void {
        if (this.model.codelang === 'default') {
            this.hasCodelangError = true;
        } else {
            this.hasCodelangError = false;
        }
    }
}
