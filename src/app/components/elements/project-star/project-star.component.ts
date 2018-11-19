import { Component, OnInit } from '@angular/core';
import { CoinSettings, SideSettings } from '../../models/coin';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-star',
  templateUrl: './project-star.component.html',
  styleUrls: ['./project-star.component.scss']
})
export class ProjectStarComponent implements OnInit {

  title: string = "Quantum Foundation";
  description: string;
  defaultDescription: string = `HoloMedicine
  <br> HoloArt HoloApplications HoloAlgorithm
  <br> HoloSmart HoloSustainability HoloSystems HoloSimulations
  <br> HoloTechnology HoloTherapies HoloTunnels Holotomography
  <br> HoloEducation HoloEmulation
  <br> HoloResearch`


  holoPRUrl: string = "https://quantumfunds.files.wordpress.com/2018/04/qpr.png";

  obverseArray = [
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqk.png", "color": "#FFCBFF" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/04/qhqd.png", "color": "#CAC3F5" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqt.png", "color": "#F9CCD7" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/qhqm.png", "color": "#F1E6CD" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqa.png", "color": "#C6F0F0" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/04/qhqr.png", "color": "#F9C4A4" },
    { "url": "https://quantumfunds.files.wordpress.com/2018/08/fqv.png", "color": "#F7F5BF" }
  ]

  getObverseUrl(fileName) {
    return `https://quantumfunds.files.wordpress.com/2018/${fileName}.png`;
  }

  coins: CoinSettings[] = [
    new CoinSettings([], { url: this.getObverseUrl("08/fqk") }, [], { url: this.holoPRUrl }),
    new CoinSettings([], { url: this.getObverseUrl("04/qhqd") }, [], { url: this.holoPRUrl }),
    new CoinSettings([], { url: this.getObverseUrl("08/fqt") }, [], { url: this.holoPRUrl }),
    new CoinSettings([], { url: this.getObverseUrl("08/qhqm") }, [], { url: this.holoPRUrl }),
    new CoinSettings([], { url: this.getObverseUrl("08/fqa") }, [], { url: this.holoPRUrl }),
    new CoinSettings([], { url: this.getObverseUrl("04/qhqr") }, [], { url: this.holoPRUrl }),
    new CoinSettings([], { url: this.getObverseUrl("08/fqv") }, [], { url: this.holoPRUrl }),
  ]

  projects = [
    {name: "Put in Your Media for Quantum Foundation",   style: { top: "20px",   left: "50%",                transform: "translateX(-50%)"}},
    {name: "Medicine",                                style: { top: "64px",   left: "calc(50% - 97px)",   transform: "translateX(-100%)"}},
    {name: "Artificial Intelligence",                 style: { top: "123px",  left: "calc(50% - 190px)",  transform: "translateX(-100%)"}},
    {name: "Applications",                            style: { top: "216px",  left: "calc(50% - 246px)",  transform: "translateX(-100%)"}},
    {name: "Algorithms",                              style: { top: "320px",  left: "calc(50% - 266px)",  transform: "translateX(-100%)"}},
    {name: "Smart",                                   style: { top: "424px",  left: "calc(50% - 246px)",  transform: "translateX(-100%)"}},
    {name: "Sustainability",                          style: { top: "516px",  left: "calc(50% - 190px)",  transform: "translateX(-100%)"}},
    {name: "Systems",                                 style: { top: "574px",  left: "calc(50% - 97px)",   transform: "translateX(-100%)"}},
    {name: "Simulations",                             style: { top: "624px",  left: "50%",                transform: "translateX(-50%)"}},
    {name: "Technology",                              style: { top: "574px",  left: "calc(50% + 97px)"}},
    {name: "Therapies",                               style: { top: "516px",  left: "calc(50% + 190px)"}},
    {name: "Tunnels",                                 style: { top: "424px",  left: "calc(50% + 246px)"}},
    {name: "Tomography",                              style: { top: "320px",  left: "calc(50% + 266px)"}},
    {name: "Education",                               style: { top: "216px",  left: "calc(50% + 246px)"}},
    {name: "Emulation",                               style: { top: "123px",  left: "calc(50% + 190px)"}},
    {name: "Research",                                style: { top: "64px",   left: "calc(50% + 97px)"}},
  ]
  



  starBgUrl: string;
  starIndex: number;
  currentStep: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.currentStep = (params.project)? params.project : "QuantumFoundation";
      this.title = this.currentStep;
      this.description = (this.currentStep == "QuantumFoundation")? this.defaultDescription: "";
    });

    this.starBgUrl = `assets/images/12star8frameQF.png`;
    
    // setInterval(x => this.iterateStarBg(), 810);
  }

  iterateStarBg() {
    this.starIndex = (this.starIndex == 1)? 2: 1;
    this.starBgUrl = `https://quantumfunds.files.wordpress.com/2018/11/12star_h_${this.starIndex}.png`;
  }

  getFctcoinUrl(value) {
    return `http://quantumfoundation.eu/wp-content/uploads/2017/06/FCTcoins_${value}_512.png`;
  }

  getHexSide(settings: SideSettings, size) {
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }

  selectHex(obverse, event: MouseEvent) {
  }

  selectProject(project) {
    if (project.name != "Put in Your Media for Quantum Foundation") {
      this.router.navigate(['/hologram'], { queryParams: {'project': project.name} });
    } else {
      this.router.navigate(['/hologram']);
    }
  }

}
