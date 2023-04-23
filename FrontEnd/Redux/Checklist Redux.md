# Checklist do react-redux

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux;
- [ ] npm install.

*Criar dentro do diretório src:*
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

*Criar dentro do diretório actions:*
- [ ] arquivo index.js.

*Criar dentro do diretório reducers:*
- [ ] arquivo index.js.

*Criar dentro do diretório store:*
- [ ] arquivo index.js.

*No arquivo App.js:*
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os
      estados à todos os componentes encapsulados em `<App />`.
# ** Código abaixo no index.js **

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

# ** Código abaixo no arquivo App.js **

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './pages/index';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Index } />
      </Switch>
    </div>
  );
}

# ----------------------------------------------------------------------------

export default App;


*No arquivo store/index.js:*
- [ ] importar o rootReducer e criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

*Na pasta reducers:*
- [ ] criar os reducers necessários
- [ ] configurar os exports do arquivo index.js

*Na pasta actions:*
- [ ] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar os actions creators necessários

*Nos componentes:*
- [ ] criar a função mapStateToProps

const mapStateToProps = (state) => (
  { email: state.user.email,
    total: state.wallet.expenses,
  }
);

- [ ] criar a função mapDispatchToProps
- [ ] fazer o connect

export default connect(mapStateToProps)(Index);
 * index seria a classe para conectar