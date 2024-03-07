import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
