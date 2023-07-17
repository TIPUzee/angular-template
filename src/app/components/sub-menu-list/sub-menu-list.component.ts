import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MenuButtonType } from '../menu-button/menu-button.component';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-sub-menu-list',
  templateUrl: './sub-menu-list.component.html',
  styleUrls: ['./sub-menu-list.component.scss']
})
export class SubMenuListComponent
{
  @Input({ required: true }) props: Array<MenuButtonType> = [];
  wrapper_id: number = Date.now();
  wrapper_height: number = 0.0;
  ngOnInit()
  {
  }

  ngAfterViewInit()
  {
    // Access the element and store its height
    const wrapper = document.getElementById(String(this.wrapper_id));
    if (!wrapper)
    {
      return;
    }
    const wrapper_height = wrapper.offsetHeight;
    console.log('Element height:', wrapper_height);
    this.wrapper_height = wrapper_height;
    wrapper.classList.add('initialized');
    let h_max = Math.floor(this.wrapper_height / 20) * 20;
    wrapper.classList.add('custom-h-max-' + String(h_max));


    // You can store the height in a class property or perform further actions with it
    // this.elementHeight = elementHeight;
  }
}
