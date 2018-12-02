import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  hexes = [
    { website:"kgrafen",            link:"https://kgrafen.github.io/", text:"K~Grafen Portal", hexText: "Polski Komitet Naukowy SEP ds. Technologii Grafenowej", facebook_id:"QuantumFoundations", twitter_id:"QuantumFunds", youtube_id:"UC5V_J1ZTvufF9wMlK0R_eaQ", wordpress_id:"quantumfunds", simplesite_id:"quantumfound", pinterest_id:"quantumfoundation", website_description:"<strong>Quantum Foundation</strong> are financial institutions that support Global Artificial Mind initiatives derived from fMRI and EEG big data and quantum computers to build network~based consciousness for gifted children."},
    { website:"quantum-foundation", link:"http://quantumfoundation.eu/", text:"Quantum Foundation", facebook_id:"QuantumFoundations", twitter_id:"QuantumFunds", youtube_id:"UC5V_J1ZTvufF9wMlK0R_eaQ", wordpress_id:"quantumfunds", simplesite_id:"quantumfound", pinterest_id:"quantumfoundation", website_description:"<strong>Quantum Foundation</strong> are financial institutions that support Global Artificial Mind initiatives derived from fMRI and EEG big data and quantum computers to build network~based consciousness for gifted children."},
    { website:"holopedia",          link:"http://holopedia.li/", text:"Holopedia Portal", extension:"gif", facebook_id:"Holopedia_749113741936284", twitter_id:"HolopediaQuant", wordpress_id:"holopedia", simplesite_id:"holopedia", website_description:"Holopedia is a video based encyclopedia that offers intuitive explanation and extensive information in areas such as quantum holoportation and holographic reality in electromagnetic, quantum and gravitational dimensions."},
    { website:"private-institute-of-natural-sciences", link:"https://pinsind.wordpress.com/", text:"PINS", facebook_id:"PINS_265887223575892", twitter_id:"", wordpress_id:"pinsind", website_description:""},
    { website:"graphene-quantec",   link:"https://graphenequantec.wordpress.com/", text:"Polski Komitet Naukowy SEP", facebook_id:"graphenenews", twitter_id:"graphenequantec", youtube_id:"UCKzqiHSuMkf_emEB_XWp6Xg", wordpress_id:"graphenequantec", website_description:"Graphene QuantumTechnology is based on the use of graphene applications for the advancement of Graphene Quantum Technology Computers, Sensors, Graphene Quantum Tunnelling Composites, Graphene Quantum Dots, Electrotribology, Tribology, Tribotronics."},
    { website:"graphenalloy",       link:"https://danishgraphenalloyinstitute.wordpress.com/", text:"Graphenalloy", facebook_id:"graphenalloy", twitter_id:"", website_description:"", wordpress_id:"graphenalloy"},
    { website:"internetowa-przychodnia-terapeutyczna", link:"#", text:"iPT", facebook_id:"przychodniaipt", twitter_id:"", website_description:""},
    { website:"internet-centrer-for-electrotherapy", link:"https://cetdata.wordpress.com/", text:"iCET internet Center for ElektroTherapy", facebook_id:"cetdata", twitter_id:"", website_description:"", wordpress_id:"cetdata", panoramafirm_id:"ma%C5%82opolskie,,krak%C3%B3w,pr%C4%85dnik_bia%C5%82y,feli%C5%84skiego,24/fundacja_quantum_zgcfbg_afa"},
    { website:"workshops",          link:"https://zuberecworkshops.wordpress.com/", text:"Workshops", facebook_id:"", twitter_id:"", website_description:""},
    { website:"games",              link:"#2048", text:"Games", facebook_id:"", twitter_id:"", website_description:""},
    { website:"telebiofeedback",    link:"https://telebiofeedback.wordpress.com/", text:"TeleBiofeedback", facebook_id:"TeleBiofeedback_123207378393398", twitter_id:"TeleBiofeedback", youtube_id:"UCuXzqPHs1n9QHlxk5bCkAVQ", wordpress_id:"telebiofeedback", simplesite_id:"telebiofeedback", pinterest_id:"telebiofeedback", website_description:""}, 
    
  ]

  ngOnInit() {
  }

  spinRight(entered: boolean) {
    let animationDuration = (entered) ? "running" : "paused";
    document.getElementById("carousel-outer").setAttribute('style', 'animation-play-state: ' + animationDuration)
  }

  spinLeft(entered: boolean) {
    let animationDuration = (entered) ? "running" : "paused";
    document.getElementById("carousel-outerer").setAttribute('style', 'animation-play-state: ' + animationDuration)
  }

}
