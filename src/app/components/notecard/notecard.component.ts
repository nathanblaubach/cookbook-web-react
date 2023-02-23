import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent {
  @Input() editable: boolean = false;
  @Input() title: string = '';
  @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();
}
