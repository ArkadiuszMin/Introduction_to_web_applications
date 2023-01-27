import { Component } from '@angular/core';
import Topicsjson from '../../assets/topics.json'
import { ITopic } from '../model/itopic';
import { ITopics } from '../model/itopics';

@Component({
  selector: 'app-topic-display',
  templateUrl: './topic-display.component.html',
  styleUrls: ['./topic-display.component.scss']
})
export class TopicDisplayComponent {
  topics: ITopics = Topicsjson;
  topicList: Array<ITopic> = this.topics.topics;
  info: string = "";
  naglowek: string = ""

  Show(order: number): void{
    this.info = this.topicList[order].long;
    this.naglowek = this.topicList[order].topic;
  }



}
