import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

    private players = [];

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

  savePlayer(player, id) {
    this.players.push({player: player, id: id});
    player.playVideo();
    player.setVolume(10);
  }

  onStateChange(event, id) {
      if(event.data === YT.PlayerState.ENDED){
        this.players.find(player => player.id == id).player.seekTo(0);
    }
  }

}
