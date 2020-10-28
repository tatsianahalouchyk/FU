import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JHipsterDemoSharedModule } from 'app/shared/shared.module';
import { JHipsterDemoCoreModule } from 'app/core/core.module';
import { JHipsterDemoAppRoutingModule } from './app-routing.module';
import { JHipsterDemoHomeModule } from './home/home.module';
import { JHipsterDemoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JHipsterDemoSharedModule,
    JHipsterDemoCoreModule,
    JHipsterDemoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JHipsterDemoEntityModule,
    JHipsterDemoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JHipsterDemoAppModule {}
