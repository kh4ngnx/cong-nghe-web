import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal({
    counter: 0,
  });

  readonly styleClass = "flex flex-col";
  readonly inputValue = "";

  clickHander() {
    return;
  }
}
