import React from 'react';
import { ProductList } from './components/ProductList';
import logo from './logo.svg';
import * as Constants from './constant';
import './App.css';


export default class App extends React.Component {
  constructor(props){
     super(props);
     this.state = {
         data: [],
         isModalOpened: undefined
     }
  }

  componentDidMount(){
      console.log();
      fetch(Constants["BUILD_URI"]+"/products_data/index.json")
      .then(response => response.json())
      .then(
          data => this.setState(()=>{
            return {
              data: data.groups
            }
          })
       );
  }

  render(){
    return (
        <div>
          <ProductList data={this.state.data} />
        </div>
    )
  }
}
