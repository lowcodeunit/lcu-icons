import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LcuIconsModel } from '../../models/lcu-icons.model';

@Component({
  selector: 'lcu-lcu-icons',
  templateUrl: './lcu-icons.component.html',
  styleUrls: ['./lcu-icons.component.scss']
})
export class LcuIconsComponent implements OnInit {

  @Input() public card: LcuIconsModel;

  @Output() public cardSelected: EventEmitter<any>;

  constructor() {
    this.cardSelected = new EventEmitter<any>();
  }

  public ngOnInit(): void { }

  public SelectCard(url?: string): void {
    this.cardSelected.emit();

    if (url) {
      window.open(url);
    }
  }

}
