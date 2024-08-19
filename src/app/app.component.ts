import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipModule } from './tooltip/tooltip.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tooltip';
}
