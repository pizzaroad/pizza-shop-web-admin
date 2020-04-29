import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss']
})
export class DashboardWidgetComponent implements OnInit {

  @Input() titleValue: string;
  @Input() titleDescription: string;

  @Input() subtitleValue: string;
  @Input() subtitleDescription: string;

  @Input() image: string;

  @Input() appRoutingLink: string;

  @Input() loading: boolean = true;

  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
