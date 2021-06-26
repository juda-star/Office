import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routing from './components/Routing/Routing';
import { useState } from 'react';
import { UsersProvider } from './components/Contaxt/Contaxt';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {

  const USER = [
    { firstname: "judaa", lastname: "ishta", birth : 1992, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "ithak", lastname: "kasia", birth : 1999, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "yoni", lastname: "bitaw", birth : 1995, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "shlomo", lastname: "guangul", birth : 1994, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "david", lastname: "talala", birth : 1993, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "yosef", lastname: "sahlo", birth : 1995, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "ithak", lastname: "binesay", birth : 1995, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "sigalit", lastname: "avera", birth : 1997, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "noy", lastname: "koka", birth : 1999, phone: "052334455", email: "yehooda@gmail.com" },
    { firstname: "asi", lastname: "alena", birth : 1998, phone: "052334455", email: "yehooda@gmail.com" },
    


  ];
  const [newUser, setNewUser] = useState(USER);

  return (
    <>

      <UsersProvider value={{ newUser, setNewUser }}>
        <Router >
          <Header />
          <Routing />
        </Router>
        <Footer />
      </UsersProvider>
    </>
  );
}

export default App;
