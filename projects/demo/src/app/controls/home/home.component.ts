import { Component, OnInit } from '@angular/core';
import { SVGIconsModel, SvgIconsService } from '@lcu/common';


@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected basePath: string;

  constructor(protected svgIconsService: SvgIconsService) { 
    this.basePath = '/icons/svgs/';
  }

  public ngOnInit(): void { 

    const icons: Array<SVGIconsModel> =
    [
      { Name: 'download', IconPath: 'download.svg' },
      { Name: 'phone', IconPath: 'phone.svg' }
    ];

    this.svgIconsService.SetIcons(icons, this.basePath);
  }

}
