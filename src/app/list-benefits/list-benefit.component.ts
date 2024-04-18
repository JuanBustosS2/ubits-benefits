import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'list-bene',
  templateUrl: `list-benefits.html`,
  standalone:true,
  imports: [MatTabsModule,MatButtonModule,MatCardModule],
})
export class ListBenefitsComponent {

  public data = [{
    
  }]
}
