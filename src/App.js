import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Doughnut, Bar, Line} from 'react-chartjs-2';

const PRICES = [
  {name: "USD", currency: "USD"},
  {name: "EUR", currency: "EUR"},
  {name: "JPY", currency: "JPY"},
  {name: "UAH", currency: "UAH"},
  {name: "CAD", currency: "CAD"}
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      activePrice:0,
    };
  }
  render() {
       const activePrice = this.state.activePrice;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">BTC Ticker 1.0</h1>
        </header>
        <p className="App-intro">
          
        </p>
        



        {PRICES.map((pricez, index) => (
          <button 
            key={index}
            onClick={() => {
              this.setState ({ activePrice: index});
              console.log('Clicked index ' +index);

            }}
            >
            {pricez.name}
            
            </button>
            ))}
            <BitcoinPrice 
                key={activePrice}
                currency={PRICES[activePrice].currency}
                />
      </div>
    );
  }
}

class BitcoinPrice extends Component {
    constructor() {
    super();
    this.state = {
      bitcoinData: null
    };
  }
    componentDidMount() {
      const  currency = this.props.currency;
      const URL = "https://blockchain.info/ru/ticker";
              
      fetch(URL).then(res => res.json()).then(json => {
        this.setState({ bitcoinData: json })
      })


    }

  render() {
    const bitcoinData = this.state.bitcoinData;
      const curr = this.props.currency;
      const wtf = bitcoinData + "." + [ curr ];
    if (!bitcoinData) return <div> L.O.A.D.I.N.G </div>;
    const wether = bitcoinData.curr;
      const data = (canvas) => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(222,22,100,0);
 
        return {
 
            backgroundColor: gradient

        }
    }
 
      return (
        <div>
        <Line data={data} />

            <h2>LAST: {bitcoinData.USD.last} {this.props.currency}</h2>          
            <h2>SELL: {bitcoinData.USD.sell} {this.props.currency}</h2>
            <h2>BUY: {bitcoinData.USD.buy} {this.props.currency}</h2>          

        </div>
      );
    if (this.state.currency === 'EUR')   return (
        <div>
            <h1>LAST: {bitcoinData.EUR.last} {this.props.currency}</h1>
            <h2>SELL: {bitcoinData.EUR.sell} {this.props.currency}</h2>          
        </div>
      );

  }
}

export default App;
