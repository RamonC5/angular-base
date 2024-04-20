import { NgModule } from "@angular/core";
import { ListComponent } from "./heroes/list/list.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
                ListComponent,
                HeroComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [CommonModule]
})
export class HeroesModule{

}
