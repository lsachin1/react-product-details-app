import React from 'react';
import { ProductList } from './components/ProductList';
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
      fetch("/products_data/index.json")
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
        <div className="productMainContainer">
          <ProductList data={this.state.data} />
        </div>
    )
  }
}
