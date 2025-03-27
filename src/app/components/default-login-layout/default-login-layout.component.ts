import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {

  @Input() title: string = "";
  @Input() primaryButtonText: string = "";
  @Input() secondaryButtonText: string = "";
  @Input() disablePrimaryButton: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
