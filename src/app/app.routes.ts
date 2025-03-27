import { Routes } from '@angular/router';
import {LoginpageComponent} from "./pages/loginpage/loginpage.component";
import { SinguppageComponent } from './pages/singuppage/singuppage.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginpageComponent
    },
    {
        path: 'singup',
        component: SinguppageComponent
    }
];
