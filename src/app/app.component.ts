import { Component } from '@angular/core';
import { OptionsSelectorComponent } from './components/options-selector/options-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OptionsSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dynamic-modals-ngzorro';
}
