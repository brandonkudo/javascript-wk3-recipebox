import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Pizza', 3, ['Cheese','Tomato','Pepperoni'],["place in oven","idk"]),
    new Recipe('Sushi', 2, ['Rice','Crab','Cabbage'], ["roll", "increase leprechuan constitution", "cook rice?"]),
    new Recipe('Mac N Cheese', 1, ['Mac','Cheese'], ["boil noodles","profit"])
  ]

  isDone(clickedRecipe: Recipe) {
    if(clickedRecipe.done === true) {
      alert("This recipe is done!");
    } else {
      alert("This recipe is not done. Better get to work!");
    }
  }

  priorityColor(currentDirection) {
    if(currentDirection.priority === 3) {
      return "bg-danger";
    } else if (currentDirection.priority === 2) {
      return "bg-success";
    } else {
      return "bg-info";
    }
  }
}


export class Recipe {
  public done: boolean = false;
  public editing = false;
  constructor(public name: string, public priority: number, public ingredients: Array<string>, public directions: Array<string>) { }

  editRecipe() {
    this.editing = !this.editing;
  }
}
