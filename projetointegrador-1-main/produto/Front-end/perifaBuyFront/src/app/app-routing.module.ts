import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComponenteLojaFarmaciaComponent } from './componente-loja-farmacia/componente-loja-farmacia.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { ComponenteLojaPadariaComponent } from './componente-loja-padaria/componente-loja-padaria.component';


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastro-empresa', component: CadastroEmpresaComponent},
  {path:'cadastro-usuario', component: CadastroUsuarioComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path:'cadastro-produto', component: CadastroProdutoComponent},
  {path:'forma-pagamento', component: FormaPagamentoComponent},
  {path:'inicio', component: InicioComponent},
  {path:'farmacia/:id', component: ComponenteLojaFarmaciaComponent}, //levando da pagina home até a pagina farmacia - colocar para as próximas paginas ex: ferramentas/:id
  {path:'padaria/:id', component: ComponenteLojaPadariaComponent},
  {path:'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
