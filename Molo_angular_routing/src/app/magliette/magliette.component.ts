import { Component } from '@angular/core';
import { Maglietta } from '../models/ecommerce.model';
import { Input } from '@angular/core';
@Component({
  selector: 'app-magliette',
  templateUrl: './magliette.component.html',
  styleUrls: ['./magliette.component.css']
})
export class MaglietteComponent {
  @Input() magliette:Maglietta[];
}
