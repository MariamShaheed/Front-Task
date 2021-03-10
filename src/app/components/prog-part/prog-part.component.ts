import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
 
import * as progs from '../../data/progs.json';
 
import {prog }from '../../interface/prog'


const progsLi = (progs as any).default;
 

@Component({
  selector: 'app-prog-part',
  templateUrl: './prog-part.component.html',
  styleUrls: ['./prog-part.component.css']
})


export class ProgPartComponent implements OnInit {
  ListOFProgs : prog[]=progsLi
 allData: prog[] = [];

  constructor() { }
  
  ngOnInit(): void {
    // console.log(this.ListOFProgs)
     this.ListOFProgs.map( res => {
      // console.log(res)
      if(res.school === "Nova SBE"){
        res.image = "assets/Images/Nova SBE.png"
      }
      if(res.school == "IPAG"){
        res.image = "assets/Images/IPAG.png"
      }
      if(res.school == "IESEG"){
        res.image = "assets/Images/IESEG.png"
      }
      
      if(res.school == "TOULOUSE BUSINESS SCHOOL"){
        res.image = "assets/Images/TOULOUSE BUSINESS SCHOOL.png"
      }
     
      if(res.school == " KEDGE BS"){
        res.image = "assets/Images/KEDGE BS.png"
      }
      if(res.school == " PARIS SCHOOL OF BUSINESS"){
        res.image = "assets/Images/PARIS SCHOOL OF BUSINESS.png"
      } 
      if(res.school == " AUDENCIA"){
        res.image = "assets/Images/AUDENCIA.png"
      }
      if(res.school == "Montpellier BS"){
        res.image = "assets/Images/Montpellier BS.png"
      }
      if(res.school == "EISTI"){
        res.image = "assets/Images/EISTI.png"
      }
      if(res.school == "ESC CLERMONT"){
        res.image = "assets/Images/ESC CLERMONT.png"
      }
       if(res.school == "SKEMA"){
        res.image = "assets/Images/SKEMA.png"
      }

      if(res.school == "ESAIP"){
        res.image = "assets/Images/ESAIP.png"
      } 
       if(res.school == "ICN"){
        res.image = "assets/Images/ICN.png"
      } 
      
      if(res.school == "ECAM Lyon"){
        res.image = "assets/Images/ECAM Lyon.png"
      } 
       if(res.school == "ISEP"){
        res.image = "assets/Images/ISEP.png"
      }

      if(res.school == "EXCELIA"){
        res.image = "assets/Images/EXCELIA.png"
      }
      if(res.school == "IUBH"){
        res.image = "assets/Images/IUBH.png"
      }  
    });
    
    this.ListOFProgs.forEach(e => {
      if(e.image){
        this.allData.push(e);
       // console.log('image', e)
      }
      // if(!e.image){
      //   console.log('empty images ', e)
      // }
    })
 
    
  }
 
}
