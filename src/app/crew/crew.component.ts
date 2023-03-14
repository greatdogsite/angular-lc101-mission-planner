import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }
  add(name, checked) {
    let newObject = { name: name, firstMission: checked };
    this.crew.push(newObject);
  }
  remove(person) {
    let index = this.crew.indexOf(person);
    this.crew.splice(index, 1);
  }
  edit(person) {
    this.memberBeingEdited = person;
    console.log(this.memberBeingEdited);
  }
  nameChange(person, newName) {
    // let index = this.crew.indexOf(this.memberBeingEdited)
    // this.crew[index]["name"] = newName;
    console.log(person);
    console.log(newName);
    person["name"] = newName;
    this.memberBeingEdited = null;
  }

}
