import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2473651/buddie.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
