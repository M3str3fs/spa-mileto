import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogJuridicoComponent } from './dialog-juridico/dialog-juridico.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LoginComponent,
    CadastroClienteComponent,
    DialogJuridicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatFileUploadModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
