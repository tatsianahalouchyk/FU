import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  // TODO update any type:
  itemsListWithCheckPossibility: any[] = [];
  allCheckedItems: any[] = [];

  @Input() isCheckAvail: boolean = false;
  // TODO update any type:
  @Input() itemsList: any[] = [];
  // TODO update any type:
  @Output() choosedItem: EventEmitter<any | any[]> = new EventEmitter<any | any[]>();

  constructor() { }

  ngOnInit(): void {
    this.itemsListWithCheckPossibility = [...this.itemsList].map(el => el = { ...el, isChecked: false });
  }

  // TODO update any type:
  onItemClick(item: any, id: number) {
    if (this.isCheckAvail) {

      if (!item.isChecked) {
        item.isChecked = true;
        this.allCheckedItems.push(item);
      } else {
        item.isChecked = false;
        this.allCheckedItems = this.allCheckedItems.filter(el => el.name !== item.name);
      }

      const arrToEmit = this.allCheckedItems.map(el => el = {name: el.name});
      this.choosedItem.emit(arrToEmit);

    } else {
      this.choosedItem.emit(item);
    }
  }

}
