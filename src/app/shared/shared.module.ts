import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountDownComponent } from "./components/count-down/count-down.component";
@NgModule({
  declarations: [CountDownComponent],
  imports: [CommonModule],
  exports: [CountDownComponent],
})
export class SharedModule {}
