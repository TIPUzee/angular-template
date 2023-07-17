import { Component, Input, TemplateRef } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { MenuButtonType } from '../menu-button/menu-button.component';
import { UtilsService } from 'src/app/services/utils.service';



export interface SidePanelMenuSection
{
  title: string;
  menus: Array<MenuButtonType>;
}


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent
{
  @Input() props: Array<SidePanelMenuSection> = [];
  angleDownIcon: IconDefinition = faAngleDown;
  isOpen = false;
}
