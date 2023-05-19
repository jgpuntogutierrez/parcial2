import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaDetail } from '../receta-detail';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas: Array<RecetaDetail> = [];
  selected: Boolean = false;
  selectedReceta!: RecetaDetail;

  constructor(private recetaService: RecetaService) { }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  onSelected(receta: RecetaDetail): void {
    this.selected = true;
    this.selectedReceta = receta;
  }


  ngOnInit() {
    this.getRecetas();
  }

}
