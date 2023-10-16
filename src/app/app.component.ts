import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client';

  protected test = [
    {
      id: "20",
      name: "test1",
      salary: "1000",
    },{
      id: "40",
      name: "test2",
      salary: "1000",
    }
  ];

  protected isMenu = false;

  protected OpenEmployeeMenu() {
    let container = document.getElementById("employee-container");
    let open_btn = document.getElementById("show-employee-btn");

    container!.classList.toggle("open");
    open_btn!.classList.toggle("fade");
    if(container!.classList.contains("open")) {
      this.isMenu = true;
      // console.log(container!.classList.contains("open"))
    } else {
      this.isMenu = false;
    }
  }

}
