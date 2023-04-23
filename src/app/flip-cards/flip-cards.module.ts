import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardsComponent } from './flip-cards.component';
import {CardsMockApiService} from "../../shared/services/cardsMockApi.service";
import {ICardsApiServiceToken} from "../../shared/interfaces/ICardsApiService";
import {CardsListModule} from "../cards-list/cards-list.module";
import {AddCardModule} from "../add-card/add-card.module";



@NgModule({
    declarations: [
        FlipCardsComponent
    ],
    exports: [
        FlipCardsComponent
    ],
  imports: [
    CommonModule,
    CardsListModule,
    AddCardModule
  ],
    providers: [
      {provide: ICardsApiServiceToken, useClass: CardsMockApiService}
    ],
})
export class FlipCardsModule { }
