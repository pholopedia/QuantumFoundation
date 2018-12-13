import { Component, OnInit } from '@angular/core';
import { CoinSettings } from '../../models/coin';

@Component({
  selector: 'app-qdevices',
  templateUrl: './qdevices.component.html',
  styleUrls: ['./qdevices.component.scss']
})
export class QdevicesComponent implements OnInit {

  obverseUrl: string = "https://quantumfunds.files.wordpress.com/2018/12/qdevices.png";
  reverseUrl: string = "https://quantumfunds.files.wordpress.com/2018/04/qpr.png";
  coin: CoinSettings = new CoinSettings("qdevices", [], { url: this.obverseUrl }, [], { url: this.reverseUrl });
  magneticFieldValue: number = 1;

  elements = [
    { "Element": "<sup>1</sup>H", "MHzT": 42.57747892 },
    { "Element": "<sup>2</sup>H", "MHzT": 6.536 },
    { "Element": "<sup>3</sup>He", "MHzT": -32.434 },
    { "Element": "<sup>7</sup>Li", "MHzT": 16.546 },
    { "Element": "<sup>13</sup>C", "MHzT": 10.7084 },
    { "Element": "<sup>14</sup>N", "MHzT": 3.077 },
    { "Element": "<sup>15</sup>N", "MHzT": -4.316 },
    { "Element": "<sup>17</sup>O", "MHzT": 5.772 },
    { "Element": "<sup>19</sup>F", "MHzT": 40.052 },
    { "Element": "<sup>23</sup>Na", "MHzT": 11.262 },
    { "Element": "<sup>27</sup>Al", "MHzT": 11.103 },
    { "Element": "<sup>29</sup>Si", "MHzT": -8.465 },
    { "Element": "<sup>31</sup>P", "MHzT": 17.235 },
    { "Element": "<sup>57</sup>Fe", "MHzT": 1.382 },
    { "Element": "<sup>63</sup>Cu", "MHzT": 11.319 },
    { "Element": "<sup>67</sup>Zn", "MHzT": 2.669 },
    { "Element": "<sup>129</sup>Xe", "MHzT": -11.777 },
  ]

  constructor() { }

  ngOnInit() {
  }

  getHexSide(settings, size) {
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }


}
