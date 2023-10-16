import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  /*Chon element theo ID
  classList: Pseudo class ben CSS -> 1 style gia lap -> co the bat/tat
  toggle: Neu co class thi xoa, neu khong co thi them vao
  */
  protected OpenMenu() {
    let menu = document.getElementById("nav-menu");
    let arrow = document.getElementById("more")

    menu!.classList.toggle("open");
    arrow!.classList.toggle("open");
  }
}
