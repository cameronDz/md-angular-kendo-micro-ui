import { Component, OnInit } from '@angular/core';
import * as _image from '../../../../assets/image-data/clouds.json';

@Component({
  selector: 'nssd-clouds-footer',
  templateUrl: './clouds-footer.component.html',
  styleUrls: ['./clouds-footer.component.scss']
})
export class CloudsFooterComponent implements OnInit {

  public svgAlt: string = _image.data.svg.alt;
  public svgHeight: string = _image.data.svg.height;
  public svgViewBox: string = _image.data.svg.viewBox;
  public svgWidth: string = _image.data.svg.width;
  public svgXmlns: string = _image.data.svg.xmlns;

  public pathDValue: string = _image.data.svg.path.dValue;
  public pathDataName: string = _image.data.svg.path.dataName;
  public pathFill: string = _image.data.svg.path.fill;
  public pathTransform: string = _image.data.svg.path.transform;

  constructor() {}

  ngOnInit() {}

}
