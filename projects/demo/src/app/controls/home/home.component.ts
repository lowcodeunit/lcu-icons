import { SvgToMatIconService, SVGToMatIconModel } from '@lowcodeunit/lcu-icons-common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lcu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected basePath: string;

  constructor(protected svgIconsService: SvgToMatIconService) { 
    
    this.basePath = '/icons/svgs/';
  }

  public ngOnInit(): void {

    const icons: Array<SVGToMatIconModel> =
    [
      { Name: 'download', IconPath: 'download.svg' },
      { Name: 'phone', IconPath: 'phone.svg' }
    ];

    this.svgIconsService.SetIcons(icons, this.basePath);
  }

}
