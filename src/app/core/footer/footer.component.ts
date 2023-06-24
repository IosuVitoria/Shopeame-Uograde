import { Component } from '@angular/core';
import { faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss',]
})
export class FooterComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faYoutube = faYoutube;
}
