import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input() description = '';
  @Input() url = ''; 

}
