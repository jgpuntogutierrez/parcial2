import { Component, Input, OnInit } from '@angular/core';
import { RecetaDetail } from '../receta-detail';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.css']
})
export class RecetaDetailComponent implements OnInit {

  @Input() recetaDetail!: RecetaDetail;

  constructor() { }

  ngOnInit() {
  }

}
