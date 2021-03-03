import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const [success, setSuccess] = useState(false)
  const get_data = async () => {
    setSuccess(false)
    const call = await fetch('http://127.0.0.1:8000/api/')
    const res = await call.json()
    console.log(res)
    setSuccess(true)
  }
  return (
    <>
      <Header />
      <div className={success ? 'App':'App loading'}>
        <button onClick={get_data}>gotem</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
