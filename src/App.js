import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Aux from '../src/hoc/Auxil'
import  Layout from '../src/hoc/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import GoBeApp from '../src/components/GoBeApp/App'

function App() {
  return (
    <Aux>
      <Layout>
        <GoBeApp />
       </Layout>
    </Aux>
  );
}

export default App;
