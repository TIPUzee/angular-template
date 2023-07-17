import { PropertyRead } from '@angular/compiler';
import { Component, HostBinding, Input } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { UtilsService } from 'src/app/services/utils.service';

export interface MenuButtonType
{
  title: string;
  icon?: IconDefinition;
  grid?: string;
  subMenus?: Array<MenuButtonType>;
}

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent
{
  @Input() props?: MenuButtonType;

  angleDownIcon: IconDefinition = faAngleDown;
  angleUpIcon: IconDefinition = faAngleUp;
  gridDefault = 'grid-cols-[18px,1fr,auto]';

  constructor(public utils: UtilsService)
  {
  }
}
