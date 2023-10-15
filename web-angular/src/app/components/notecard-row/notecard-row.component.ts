import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notecard-row',
  templateUrl: './notecard-row.component.html',
  styleUrls: ['./notecard-row.component.css']
})

export class NotecardRowComponent {
  @Input() editable: boolean = false;
  @Input() text: string = '';
  @Input() bold: boolean = false;
}
