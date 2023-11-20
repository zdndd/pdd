import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeDetailComponent } from "./components/home-detail/home-detail.component";
import { HomeContainerComponent } from "./components/home-container/home-container.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "hot",
        pathMatch: "full",
      },
      {
        path: ":tabLink",
        component: HomeDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
