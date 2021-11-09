import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyPageComponent} from './my-page/my-page.component';
import {LogInComponent} from './log-in/log-in.component';
import {MyAcountComponent} from './my-acount/my-acount.component';
import {AgentsComponent} from './agents/agents.component';
import {NewLoadComponent} from './new-load/new-load.component';
import {PayrollComponent} from './payroll/payroll.component';
import {AgentStatisticsComponent} from './agent-statistics/agent-statistics.component';
import {AuthGuard} from './auth/auth.guard';
import {LoadComponent} from './load/load.component';
import {GpsComponent} from './gps/gps.component';
import {InsuranceComponent} from './insurance/insurance.component';




const routes: Routes = [
  { path: '' , component: LogInComponent },
  { path: 'my-page'  , component: MyPageComponent , children: [    // , canActivate:  [AuthGuard]
      {path: 'agents' , component: AgentsComponent},
      {path: 'agent-history' , component: AgentStatisticsComponent},
      {path: 'new-load' , component: NewLoadComponent} ,
      {path: 'payroll' , component: PayrollComponent},
      {path: 'loads'  , component: LoadComponent},
      {path: 'insurance'  , component: InsuranceComponent},
      {path: 'transshipment'  , component: GpsComponent},
    ]},
  { path: '**' , component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
