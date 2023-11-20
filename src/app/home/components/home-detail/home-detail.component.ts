import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable, Subscription } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";

import { Ad } from "src/app/shared/domain";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailComponent implements OnInit {
  selectedTabLink$: Observable<string>;
  ad$: Observable<Ad>;
  constructor(private route: ActivatedRoute, private service: HomeService) {}

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter((params) => params.has("tabLink")),
      map((params) => params.get("tabLink"))
    );
    this.ad$ = this.selectedTabLink$
      .pipe(
        switchMap((tab) => this.service.getAdByTab(tab)),
        filter((ads) => ads.length > 0),
        map((ads) => ads[0])
      )
      .subscribe({
        error: (error) => {
          console.log(error);
        },
      });
  }
}
