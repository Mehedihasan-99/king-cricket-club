import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [balance, setBalance] = useState(0);

  const handleAddCredit = () => {
    const addAmount = 500000;
    setBalance(addAmount + balance);
    toast.success(`Congratulations! ${addAmount}  Your add money Taka success!`);
    return
  };

  const handleBuyPlayer = (player) => {
    const playerPrice = parseInt(player.price)
    if (balance >= playerPrice) {
      setBalance(balance - playerPrice);
    };
  };

  return (
    <>
      <Header balance={balance}></Header>
      <Banner handleAddCredit={handleAddCredit}></Banner>
      <ToastContainer
      position='top-center'
      autoClose={3000}
      z-index={10}
      />
      <Players
        handleBuyPlayer={handleBuyPlayer}
        balance={balance}
        toast={toast}
      ></Players>
      <Footer></Footer>
    </>
  )
}

export default App
