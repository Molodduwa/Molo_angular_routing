import { Component } from '@angular/core';
import { Scarpa } from '../models/ecommerce.model';
import { Input } from '@angular/core';
@Component({
  selector: 'app-scarpe',
  templateUrl: './scarpe.component.html',
  styleUrls: ['./scarpe.component.css']
})
export class ScarpeComponent {
  @Input() scarpe:Scarpa[];
  
}
