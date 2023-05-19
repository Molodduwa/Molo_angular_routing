import { Component } from '@angular/core';
import { Maglietta } from '../models/ecommerce.model';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-magliette',
  templateUrl: './magliette.component.html',
  styleUrls: ['./magliette.component.css']
})
export class MaglietteComponent {
  @Input() magliette:Maglietta[];
  constructor(private router:Router){
    this.magliette =this.router.getCurrentNavigation().extras.state as Maglietta[];

  }
}
