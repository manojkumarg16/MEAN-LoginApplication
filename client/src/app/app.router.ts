import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavoneComponent } from './navone/navone.component';
import { RegisterComponent } from './register/register.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { AuthGuard } from './guard/auth.guard';
import { FirstPageComponent } from './firstpage/firstpage.component';
export const router: Routes= [
	{ path: '', redirectTo: 'Root', pathMatch: 'full'},
	{ path: 'Root' ,component: FirstPageComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: LandingPageComponent , canActivate:[AuthGuard],
	children: [
		{ path: 'navone', component: NavoneComponent,
			children: [
				{ path: 'userentry', component: UserEntryComponent }
				]
			}
		]
	},
	{ path: 'register', component: RegisterComponent },
	
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);