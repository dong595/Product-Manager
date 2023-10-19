import { Component } from '@angular/core';
import { IStudent } from 'src/app/interfaces/student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wd18102';
  student: IStudent = {
    id: 1,
    name: 'Dong',
    imageUrl: 'https://picsum.photos/200/300',
    status: true,
    age: 20,
    address: {
      city: 'hanoi',
    },
  };
  setName(newName: String) {
    return (this.student.name = newName);
  }
  onHandleChange(event: any) {
    this.student.name = event.target.value;
  }
}
