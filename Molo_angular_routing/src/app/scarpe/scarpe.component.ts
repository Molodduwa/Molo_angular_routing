import { Component } from '@angular/core';
import { Scarpa } from '../models/ecommerce.model';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scarpe',
  templateUrl: './scarpe.component.html',
  styleUrls: ['./scarpe.component.css']
})
export class ScarpeComponent {
  @Input() scarpe:Scarpa[];
  constructor(private router:Router){
    this.scarpe =this.router.getCurrentNavigation().extras.state as Scarpa[];

  }
  
}
