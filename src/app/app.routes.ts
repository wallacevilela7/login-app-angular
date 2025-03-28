import { Routes } from '@angular/router';
import {LoginpageComponent} from "./pages/loginpage/loginpage.component";
import { SinguppageComponent } from './pages/singuppage/singuppage.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';
export const routes: Routes = [
    {
        path: 'login',
        component: LoginpageComponent
    },
    {
        path: 'singup',
        component: SinguppageComponent
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
    }
];
