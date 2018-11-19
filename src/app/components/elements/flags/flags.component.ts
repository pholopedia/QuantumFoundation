import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {

  countryCodes: Array<string> = ['cn', 'kr', 'gb', 'es', 'dk', 'de'];

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  changeLanguage(code) {
    this.translate.use(code);
  }

}
