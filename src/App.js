// import './App.css';
// import AddItem from './components/AddItem';
// import DataFetching from './components/DataFetching';
// import HookCounter from './components/HookCounter';
// import IdBtnClick from './components/IdBtnClick';
// import IncInfo from './components/IncInfo';
// import IndevidualData from './components/IndevidualData';
// import MyEffect from './components/MyEffect';
// import MyForm from './components/MyForm';
// import NameInfo from './components/NameInfo';
// import Counter from './Practise/Components/Counter';
// import NumberArray from './Practise/Components/NumberArray';
// import UserName from './Practise/Components/UserName';
// import CompC from './components/NestedComponents/CompC';
// import GrandFather from './components/Family/GrandFather';
// import UsingMemo from './components/UseMemo/UsingMemo';
import React from  'react'

import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import OrderSummary from './components/Order/OrderSummary';
import { About } from './components/RoutingTutorial/About';
import { Contactus } from './components/RoutingTutorial/Contactus';
import { Home } from './components/RoutingTutorial/Home';
import Payment from './components/Payment';
import Cancel from './components/Cancel';
import './index.css'
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/DynamicRoute/Users';
import UserDetails from './components/DynamicRoute/UserDetails';
const LazyAbout = React.lazy(()=>import('./components/LazyLoading/About'))
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element = {
          <React.Suspense fallback='Loading...'>
              <LazyAbout/>
          </React.Suspense>
        }></Route>
        <Route path='/Contact' element = {<Contactus/>}></Route>
        <Route path='order-summary' element={<OrderSummary/>}></Route>
        <Route path= 'payment' element={<Payment/>} ></Route>
        <Route path='cancel' element = {<Cancel/>} ></Route>
        <Route path='*' element = {<NoMatch/>}></Route>
        <Route path='products' element = {<Products/>}>
            <Route index element = {<FeaturedProducts />}/>
            <Route path='featured' element={<FeaturedProducts/>}></Route>
            <Route path = 'new' element = {<NewProducts/>}></Route>
        </Route>
        <Route path='users' element={<Users/>}></Route>
        <Route path='users/:userId' element={<UserDetails/>}></Route>
      </Routes>
        {
          /**
           * <h1> React Hook </h1>
        <UsingMemo/>
        <GrandFather/>
        <CompC/>
        <IncInfo/>
        <IdBtnClick/>
        <IndevidualData/>
        <DataFetching/>
        <MyForm/>
        <HookCounter/>
        <NameInfo/>
        <AddItem/>
        <Counter/>
        <UserName/>
        <NumberArray/>
        <MyEffect/>
           */
        }
    </div>
  );
}
export default App;