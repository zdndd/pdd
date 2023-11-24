import { Component, Input, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { increment, login } from "./reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit() {
    this.store.dispatch(login({ mobile: "18616028426", password: "1234" }));
  }
}
