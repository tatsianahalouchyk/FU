import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-close-btn',
  templateUrl: './close-btn.component.html',
  styleUrls: ['./close-btn.component.scss']
})
export class CloseBtnComponent implements OnInit {
  @Output() public closeBtnClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeBtnClick.emit(true);
  }

}
