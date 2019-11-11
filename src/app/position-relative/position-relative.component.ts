import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-position-relative",
  templateUrl: "./position-relative.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./position-relative.component.scss"]
})
export class PositionRelativeComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.use("fr");
  }

  ngOnInit() {}
}
