import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es'); 
  }

  public setLanguage(lang: string) {
    this.translate.use(lang);
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_anpxlr3', 'template_opq0nfq', e.target as HTMLFormElement, 'w1UrEPUYto5hpxBkJ')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}