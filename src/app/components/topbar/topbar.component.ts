import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    private player;

  constructor(
    translate: TranslateService,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('gb');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('gb');
  }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    this.player.playVideo();
    this.player.setVolume(10);
  }

  onStateChange(event) {
      if(event.data === YT.PlayerState.ENDED){
        this.player.seekTo(0);
    }
  }

}
