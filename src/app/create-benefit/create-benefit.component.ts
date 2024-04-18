import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {BenefitsService} from "../services/benefits.service";

@Component({
  selector: 'landing',
  templateUrl: './create-benefit.html',
  styleUrl: './create-benefit.css',
  standalone:true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})

export class CreateBenefitComponent {
  form: FormGroup;

  constructor( public benefitsService:BenefitsService ) {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
      beneficio: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.benefitsService.createBenefit(this.form.value)
    }
  }
}
