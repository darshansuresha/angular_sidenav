import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);


  menulist = [ 
    {
      number: '1',
      name: 'home',
      icon: "bi bi-house",
      navigation: 'home'
    },
    {
      number: '2',
      name: 'About',
      icon: "bi bi-info",
      navigation: "about"
    },
    {
      number: '3',
      name: 'Contact',
      icon: "bi bi-person-lines-fill",
      navigation: 'contact'
    }
  ]

}
