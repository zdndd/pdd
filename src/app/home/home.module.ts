import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeDetailComponent } from "./components/home-detail/home-detail.component";
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeDetailComponent, HomeContainerComponent],
  imports: [SharedModule, CommonModule, HomeRoutingModule],
})
export class HomeModule {}
