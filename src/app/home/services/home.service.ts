import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ad } from "src/app/shared/domain";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAdByTab(tab: string) {
    return this.http.get<Ad[]>(`http://39.106.75.209/api/ads`, {
      params: { categories_like: tab },
    });
  }
}
