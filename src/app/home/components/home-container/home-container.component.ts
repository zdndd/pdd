import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.less"],
})
export class HomeContainerComponent implements OnInit {
  startDate = new Date(2019, 12, 12);
  futureDate = new Date(2019, 12, 13);
  constructor() {}

  ngOnInit() {}
}
