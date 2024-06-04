import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  youtubeLink='https://youtu.be/2mRlUWNIPzo?si=cw3je0jU0dj4h1sK';
  emailAdress='code.all@gmail.com';
  constructor(public router:Router){

  }
  onHome()
  {
    //window.scrollTo({top:0,behavior:'smooth'})
    this.router.navigate(['./portfolio-website/home'])
  }
  
  
  onAbout()
  {
    this.router.navigate(['./portfolio-website/about'])
  }
  
  onContact()
  {
    this.router.navigate(['./portfolio-website/contact'])
  }
  }


