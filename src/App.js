// import './App.css';
import AddItem from './components/AddItem';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import IdBtnClick from './components/IdBtnClick';
import IncInfo from './components/IncInfo';
import IndevidualData from './components/IndevidualData';
import MyEffect from './components/MyEffect';
import MyForm from './components/MyForm';
import NameInfo from './components/NameInfo';
import Counter from './Practise/Components/Counter';
import NumberArray from './Practise/Components/NumberArray';
import UserName from './Practise/Components/UserName';
import CompC from './components/NestedComponents/CompC';
import GrandFather from './components/Family/GrandFather';
import UsingMemo from './components/UseMemo/UsingMemo';
function App() {
  return (
    <div className="App">
        <h1> React Hook </h1>
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
    </div>
  );
}
export default App;