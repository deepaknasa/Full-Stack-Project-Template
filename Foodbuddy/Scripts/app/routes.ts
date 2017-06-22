import { Routes } from '@angular/router';
import { HomeComponent } from './app-component';
import { StatisticsComponent } from './stats/index';
import { LoginComponent, RegisterComponent, LogoutComponent } from './login/index';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stats', component: StatisticsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    //{path: '', component: Home},
    /*  {path: 'autocomplete', component: AutocompleteDemo},
      {path: 'button', component: ButtonDemo},
      {path: 'card', component: CardDemo},
      {path: 'chips', component: ChipsDemo},
      {path: 'radio', component: RadioDemo},
      {path: 'select', component: SelectDemo},
      {path: 'sidenav', component: SidenavDemo},
      {path: 'slide-toggle', component: SlideToggleDemo},
      {path: 'slider', component: SliderDemo},
      {path: 'progress-spinner', component: ProgressSpinnerDemo},
      {path: 'progress-bar', component: ProgressBarDemo},
      {path: 'portal', component: PortalDemo},
      {path: 'overlay', component: OverlayDemo},
      {path: 'checkbox', component: CheckboxDemo},
      {path: 'input', component: InputDemo},
      {path: 'toolbar', component: ToolbarDemo},
      {path: 'icon', component: IconDemo},
      {path: 'list', component: ListDemo},
      {path: 'menu', component: MenuDemo},
      {path: 'live-announcer', component: LiveAnnouncerDemo},
      {path: 'gestures', component: GesturesDemo},
      {path: 'grid-list', component: GridListDemo},
      {path: 'tabs', component: TabsDemo, children: TABS_DEMO_ROUTES},
      {path: 'button-toggle', component: ButtonToggleDemo},
      {path: 'baseline', component: BaselineDemo},
      {path: 'ripple', component: RippleDemo},
      {path: 'dialog', component: DialogDemo},
      {path: 'tooltip', component: TooltipDemo},
      {path: 'snack-bar', component: SnackBarDemo},
      {path: 'platform', component: PlatformDemo},
      {path: 'style', component: StyleDemo},*/
];
