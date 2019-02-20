import React, { Component } from 'react';
import Counter from './containers/Counter/Counter2';
import './App.css';
// paso 1: crear el Store
import { createStore } from 'redux'; //paso 1.1
import { Provider } from 'react-redux'; // paso 1.2
import reducer from './store/reducer2'; // paso 1.3

const store = createStore( reducer ); // paso 1.4 este es el puente entre el store y el reducer

class App extends Component {
  render() {
    return (
      // paso 1.5: etiqueta Provider --> con estos 5 pasos queda listo el "store". 
      // paso 2: crear "reducer" en carpeta "./store"
      <Provider store={store}>
      <div className="App">
       <Counter />
      </div>
      </Provider>
    );
  }
}

export default App;
