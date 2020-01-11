import React from 'react';
import { HashRouter as Router, Switch , Route } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import About from './components/pages/About';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/contacts/NotFound';
function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
      <h1>The App Component</h1>
      <Header branding = "Contact Manager"/> 
      <div className="container">  
      <Switch >
        <Route exact path ="/" component = {Contacts}></Route>
        <Route exact path ="/about" component = {About}></Route>
        <Route exact path ="/contact/add" component = {AddContact}></Route>
        <Route exact path ="/contact/edit/:id" component = {EditContact}></Route>
        <Route  component = {NotFound}></Route>
      </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
