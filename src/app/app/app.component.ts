import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAdjust, faBell, faBook, faBookmark, faCog, faCommentAlt, faEnvelope, faEye, faFileAlt, faFilm, faFont, faGamepad, faGlobe, faHeart, faImage, faL, faLock, faMusic, faPaintBrush, faPalette, faPen, faQuestionCircle, faScroll, faShare, faShieldAlt, faThumbsUp, faUserFriends, faUserSecret, faUsers }
  from '@fortawesome/free-solid-svg-icons';
import { SidePanelMenuSection } from '../components/dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'student-portal';

  sidePanelMenuSections: Array<SidePanelMenuSection> = [];
  sidePanelMenuSections2: Array<SidePanelMenuSection> = [
    {
      title: 'Main',
      menus: [
        {
          icon: faFilm,
          title: 'Movies',
          subMenus: []
        },
        {
          icon: faMusic,
          title: 'Music',
          subMenus: []
        },
        {
          icon: faBook,
          title: 'Books',
          subMenus: [
            { icon: faBookmark, title: 'Fiction' },
            { icon: faScroll, title: 'Non-Fiction' },
            { icon: faPen, title: 'Biography' }
          ]
        },
        {
          icon: faGamepad,
          title: 'Games',
          subMenus: []
        }
      ]
    },
    {
      title: 'Settings',
      menus: [
        {
          icon: faCog,
          title: 'Account',
          subMenus: []
        },
        {
          icon: faBell,
          title: 'Notifications',
          subMenus: []
        },
        {
          icon: faPalette,
          title: 'Appearance',
          subMenus: [
            { icon: faAdjust, title: 'Theme' },
            { icon: faFont, title: 'Fonts' },
            { icon: faPaintBrush, title: 'Colors' },
            { icon: faImage, title: 'Background' },
            { icon: faEye, title: 'Visibility' },
            { icon: faCog, title: 'Settings' }
          ]
        },
        {
          icon: faLock,
          title: 'Privacy',
          subMenus: [
            { icon: faShieldAlt, title: 'Security' },
            { icon: faUserSecret, title: 'Confidentiality' },
            { icon: faGlobe, title: 'Data Protection' }
          ]
        }
      ]
    },
    {
      title: 'Help',
      menus: [
        {
          icon: faQuestionCircle,
          title: 'FAQ',
          subMenus: []
        },
        {
          icon: faEnvelope,
          title: 'Contact',
          subMenus: []
        },
        {
          icon: faUserFriends,
          title: 'Community',
          subMenus: []
        },
        {
          icon: faFileAlt,
          title: 'Documentation',
          subMenus: []
        }
      ]
    },
    {
      title: 'Help',
      menus: [
        {
          icon: faQuestionCircle,
          title: 'FAQ',
          subMenus: []
        },
        {
          icon: faEnvelope,
          title: 'Contact',
          subMenus: []
        },
        {
          icon: faUserFriends,
          title: 'Community',
          subMenus: [
            { icon: faUsers, title: 'Members' },
            { icon: faCommentAlt, title: 'Forums' },
            { icon: faThumbsUp, title: 'Likes' },
            { icon: faHeart, title: 'Favorites' },
            { icon: faShare, title: 'Shares' },
            { icon: faEnvelope, title: 'Messages' }
          ]
        },
        {
          icon: faFileAlt,
          title: 'Documentation',
          subMenus: []
        }
      ]
    },
    {
      title: 'Help',
      menus: [
        {
          icon: faQuestionCircle,
          title: 'FAQ',
          subMenus: []
        },
        {
          icon: faEnvelope,
          title: 'Contact',
          subMenus: []
        },
        {
          icon: faUserFriends,
          title: 'Community',
          subMenus: []
        },
        {
          icon: faFileAlt,
          title: 'Documentation',
          subMenus: []
        }
      ]
    }
  ];

  constructor()
  {
    setTimeout(() =>
    {
      this.sidePanelMenuSections = this.sidePanelMenuSections2;
    }, 2000);
  }
}
