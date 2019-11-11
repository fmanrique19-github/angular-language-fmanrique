import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(["fr", "en"]);
    translate.setDefaultLang("fr");

    // const browserLang = translate.getBrowserLang();
    translate.use("fr");
  }

  ngOnInit() {}

  onClick(event) {
    console.log("event", event);
  }
}
