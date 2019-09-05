import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FormLogin from './components/login/FormLogin';
import FormRegister from './components/register/FormRegister';

// Nested Route, Parameter, Switch

let barangs = [
  {
    id: "b1",
    nama: "Sendal Swallow",
    harga: 1000
  },
  {
    id: "b2",
    nama: "Sepatu Niike",
    harga: 1000
  },
  {
    id: "b3",
    nama: "Tas Converse",
    harga: 5000
  }
];

class Barang extends React.Component{
  render(){
    const {nama, harga} = this.props;
    return (
      <>
        <h3>{nama}</h3>
        <p>{harga}</p>
      </>
    );
  }
}

const ListBarang = () => (
    <Router>
      <ul>
        {barangs.map(barang => (
          <li><Link to={`/barang/${barang.id}`}>{barang.nama}</Link></li>
        ))}
      </ul>

      <Route path="/barang/:id" component={DetailBarang} />
    </Router>
);

const DetailBarang = ({match}) => {
  const barang = barangs.find(b => b.id == match.params.id);
  return (
    <>
      <Barang nama={barang.nama} harga={barang.harga} />
    </>
  );
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
