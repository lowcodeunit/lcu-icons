import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SVGToMatIconModel } from '../../models/svg-to-mat-icon.model';

@Injectable({
  providedIn: 'root'
})


/**
 * Registers custom svg icons to use with <mat-icon>
 *
 * <mat-icon color="primary" svgIcon="svgHome"></mat-icon>
 *
 * Can use material theme colors when SVG fill property is removed
 * 
 * https://material.angular.io/components/icon/overview
 */

export class SvgToMatIconService {

  
  /**
   * List of icons
   */
  protected icons: Array<SVGToMatIconModel>;

  constructor(
    protected domSanitizer: DomSanitizer,
    protected matIconRegistry: MatIconRegistry) {
   }

   /**
    * Register custom SVG icon using a URL
    * 
    * @param icons List of svg icons
    * @param basePath base path to svg icons (/assets/svgs/etc.)
    */
  public SetIcons(icons: Array<SVGToMatIconModel>, basePath: string): void {

    this.icons = icons;

    this.icons.forEach((icon: SVGToMatIconModel) => {
      this.matIconRegistry.addSvgIcon(
        icon.Name,
        this.setPath(`${basePath}${icon.IconPath}`));
    });
  }


   /**
    * Register custom SVG icon using an SVG literal ('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC...')
    * 
    * @param icons List of svg icons
    * @param basePath base path to svg icons (/assets/svgs/etc.)
    */
  public SetIconsAsLiterals(icons: Array<SVGToMatIconModel>): void {

    this.icons = icons;

    this.icons.forEach((icon: SVGToMatIconModel) => {
      this.matIconRegistry.addSvgIconLiteral(
        icon.Name,
        this.domSanitizer.bypassSecurityTrustHtml(icon.IconLiteral)
      );
    });
  }

  /**
   * Return list of icons
   */
  public GetIcons(): Array<SVGToMatIconModel> {
    return this.icons;
  }

  /**
   * Register icon path
   * 
   * In order to guard against XSS vulnerabilities, any SVG URLs and HTML strings
   * must be marked as trusted by Angular's DomSanitizer service
   *
   * @param url path to svg
   */
  protected setPath(url: string): SafeResourceUrl  {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
