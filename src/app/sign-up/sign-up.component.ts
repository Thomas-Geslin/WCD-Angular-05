import { Component } from '@angular/core';
import { Order } from '../Order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  model: Order = new Order("", "", "", "");

  constructor() { }

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
}
