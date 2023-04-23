import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../shared/models/Card";

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less']
})
export class CardsListComponent implements OnInit{
  @Input()
  cards!: Card[];
  clickedCardMask: boolean[] = [];

  ngOnInit(): void {
    this.clickedCardMask = Array(this.cards.length).fill(false);
  }

  onCardClick(card: Card): void {
    const clickedCardIndex = this.cards.findIndex((c) => c.id === card.id);
    if(this.clickedCardMask[clickedCardIndex] === true) {
      this.clickedCardMask = Array(this.cards.length).fill(false);
    } else {
      this.clickedCardMask = this.cards.map((c) => c.id === card.id);
    }
  }

  @Output()
  delete = new EventEmitter<Card>();

  onCardDelete(card: Card): void {
    this.delete.emit(card);
  }
}
