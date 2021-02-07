import React from 'react'
import './App.css';
import TodoForm from './component/TodoForm';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import store from './store/store';
import ShowCard from './component/ShowCard';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoForm />
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Todo Lists</h1>
        <ShowCard />
      </div>
    </Provider>
  );
}

export default App;  