import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FormLogin from './components/login/FormLogin';
import FormRegister from './components/register/FormRegister';

// Nested Route, Parameter, Switch

class Barang extends React.Component{
  render(){
    const {name, harga, stock} = this.props;
    return (
      <>
        <h3>{name}</h3>
        <p>{harga}</p>
        <p>{stock}</p>
      </>
    );
  }
}

const ListBarang = () => (
    <Router>
      <ul>
        <li><Link to="/barang/b001">Sepatu</Link></li>
        <li><Link to="/barang/shampoo">Shampoo</Link></li>
        <li><Link to="/barang/sabun">Sabun</Link></li>
      </ul>

      <Route path="/barang/:name" component={DetailBarang} />
    </Router>
);

const DetailBarang = ({match}) => {
  switch(match.params.name){
    case "b001":
        return (
          <>
            <Barang name="Sepatu" harga="150000" stock="5" />
          </>
        );
    case "shampoo":
        return (
          <>
            <Barang name="Shampoo" harga="5000" stock="3" />
          </>
        );
    case "sabun":
        return (
          <>
            <Barang name="Sabun" harga="3000" stock="8" />
          </>
        );
  }
};

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/barang">List Barang</Link>

      <Route path="/" exact render={() => <h1>Selamat Datang Di Olshop</h1>} />
      <Route path="/barang" component={ListBarang} />
    </Router>
  );
}

export default App;
