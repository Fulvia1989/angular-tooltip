import { Component } from '@angular/core';
import { TooltipPosition, TooltipTheme } from './tooltip.enums';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone:true,
  imports:[NgClass],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;
}
