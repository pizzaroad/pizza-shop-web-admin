import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit as farEdit } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkedAlt as fasMapMarkedAlt, faMoneyCheckAlt, faQuestionCircle, faTrashAlt as fasTrashAlt, faUser as fasUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MESSAGE_FORMAT_CONFIG, TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { PickListModule } from 'primeng/picklist';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './http/error.interceptor';
import { ApiModule, BASE_PATH } from './open-api';
import { AuthGuard } from './pages/auth/auth.guard';
import { AuthService } from './pages/auth/auth.service';
import { LoginComponent } from './pages/auth/login/login.component';
import { UnauthorizedComponent } from './pages/auth/unauthorized/unauthorized.component';
import { DeliveryAdressesFormComponent } from './pages/data/delivery-adresses/delivery-adresses-form/delivery-adresses-form.component';
import { DeliveryAdressesComponent } from './pages/data/delivery-adresses/delivery-adresses.component';
import { GroupsFormComponent } from './pages/data/groups/groups-form/groups-form.component';
import { GroupsTablesComponent } from './pages/data/groups/groups-tables/groups-tables.component';
import { GroupsComponent } from './pages/data/groups/groups.component';
import { UsersFormComponent } from './pages/data/users/users-form/users-form.component';
import { UsersTableComponent } from './pages/data/users/users-table/users-table.component';
import { UsersComponent } from './pages/data/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { AppMessageService } from './services/app-message.service';
import { MenuService } from './services/menu.service';
import { SessionService } from './services/session.service';
import { SideBarService } from './services/sidebar/sidebar.service';
import { ThemeService } from './services/theme/theme.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { createMultiTranslateLoader } from './translation/multi-translate-http-loader';
import { AuthUtils } from './utils/auth-utils';
import { ShippingMethodsComponent } from './pages/data/shipping-methods/shipping-methods.component';

export function createTranslateLoader(http: HttpClient) {
  return createMultiTranslateLoader(http);
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function appInitializerFactory(
  translate: TranslateService,
  injector: Injector,
  themeService: ThemeService
) {
  themeService.init();

  return async () => {
    await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

    translate.addLangs(['en', 'it']);
    translate.setDefaultLang('it');
    try {
      await translate.use('it').toPromise();
    } catch (err) { }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    UnauthorizedComponent,
    GroupsComponent,
    GroupsTablesComponent,
    GroupsFormComponent,
    UsersTableComponent,
    UsersFormComponent,
    DeliveryAdressesComponent,
    DeliveryAdressesFormComponent,
    ShippingMethodsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler,
      }
    }),
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ButtonModule,
    SlideMenuModule,
    ToastModule,
    MenuModule,
    DropdownModule,
    CardModule,
    PanelModule,
    InputTextModule,
    CheckboxModule,
    TableModule,
    PickListModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    FieldsetModule
  ],
  exports: [TranslateModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector, ThemeService],
      multi: true
    },
    {
      provide: BASE_PATH,
      useValue: environment.baseApiRestUrl
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MESSAGE_FORMAT_CONFIG, useValue: { locales: ['it', 'en'] } },
    SideBarService,
    ThemeService,
    SessionService,
    AuthGuard,
    AuthService,
    AuthUtils,
    MessageService,
    MenuService,
    ConfirmationService,
    AppMessageService,
    DialogService
  ],
  entryComponents: [DeliveryAdressesFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private library: FaIconLibrary) {
    // regular
    this.library.addIcons(farEdit);
    // solid
    this.library.addIcons(fasUser, fasMapMarkedAlt, faQuestionCircle, fasTrashAlt, faMoneyCheckAlt);
    // brand
    this.library.addIcons();
  }
}
