import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JHipsterSharedModule } from 'app/shared/shared.module';
import { JHipsterCoreModule } from 'app/core/core.module';
import { JHipsterAppRoutingModule } from './app-routing.module';
import { JHipsterHomeModule } from './home/home.module';
import { JHipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JHipsterSharedModule,
    JHipsterCoreModule,
    JHipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JHipsterEntityModule,
    JHipsterAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JHipsterAppModule {}
