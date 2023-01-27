import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.scss']
})
export class SingleTopicComponent {
  @Input() topic: string = ""
  @Input() short: string = ""
  @Input() order: number = 0
  @Output() OutputTopicNumber: EventEmitter<number> = new EventEmitter<number>();
  Choose():void{
    this.OutputTopicNumber.emit(this.order)
  }
}
