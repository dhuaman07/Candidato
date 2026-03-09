import { Routes } from '@angular/router';
import { ResultadosComponent } from './pages/resultados/resultados.component.';
import { CuestionarioComponent } from './pages/cuestionario/cuestionario.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [

{
path:'',
component:HomeComponent
},

{
path:'cuestionario',
component:CuestionarioComponent
},

{
path:'resultados',
component:ResultadosComponent
},

{
path:'perfil',
component:PerfilComponent
}

];