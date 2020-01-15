import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import * as Shop from './api/types';
import { LoadMoreProducts, Categories } from './api/shopBackend';
import ProductList from './components/ProductList'
import CartReset from './components/CartReset'

type State = {
  cart: Shop.ProductItem[],
  listedProducts: Shop.ProductItem[],
  allProducts: Shop.ProductItem[],
  filterName: string,
  isLoading: boolean
}
class App extends Component<{}, State> {
  menuItems: Shop.MenuItem[] = Categories;

  constructor(props: {}) {
    super(props);
    this.state = {
      cart: [],
      allProducts: [],
      listedProducts: [],
      filterName: '',
      isLoading: false
    }
  }

  componentDidMount() {
    this.loadMore();
  }

  onAddToCart = (product: Shop.ProductItem) => {
    this.setState((previous) => {
      return { cart: [...previous.cart, product] }
    });
  }
  setLoading = (isLoading: boolean) => {
    this.setState({ isLoading })
  }
  loadMore = () => {
    this.setLoading(true)
    LoadMoreProducts().then(products => {
      this.setState(previous => (
        { allProducts: [...previous.allProducts, ...products] }
      ), () => { this.filter(); this.setLoading(false) });
    })
  }

  onFilter = (name: string) => {
    this.setState({ filterName: name }, this.filter);
  }

  filter = () => {
    this.setState(previous => {
      const categoryToFilter = Categories.find(cat => cat.name === this.state.filterName)
      if (!categoryToFilter)
        return { listedProducts: [...previous.allProducts] };
      else
        return { listedProducts: previous.allProducts.filter(item => item.category.includes(categoryToFilter)) }
    })
  }

  render() {
    return (
      <>
        <Menu title={'This is the main menu'} isLoading={this.state.isLoading} filter={this.state.filterName} items={this.menuItems} onClick={this.onFilter}></Menu>
        <div className="App">
          <h1>All the products</h1>
          <ProductList products={this.state.listedProducts} onClick={this.onAddToCart}></ProductList>
        </div>
        <div onClick={this.loadMore}>Load more...</div>
        <CartReset></CartReset>
      </>
    )
  }
}

export default App;
