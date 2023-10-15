import { Component } from '@angular/core';

interface ExternalLink {
  text: string,
  url: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  links: ExternalLink[] = [
    {
      text: 'Source Code on GitHub (MIT)',
      url: 'https://github.com/nathanblaubach/cookbook-web-angular'
    },
    {
      text: 'My Website',
      url: 'https://nathanblaubach.com'
    },
    {
      text: 'RealFaviconGenerator',
      url: 'https://realfavicongenerator.net/'
    }
  ];
}
