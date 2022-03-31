import './App.css';
import Book from './Book';
import {Preloader} from './Preloader';

function App(prop) { 
  return prop.isLoading ? <Preloader />  :  (
    <div className="App">
      <h2>Hello React</h2>
      {/*use prop children */}
      <Book title="React">
        props-children
      </Book>
      {/*use prop children */}

      <Book title="Vue" />
      <Book title="Angular" />
    </div>
  )
}

export default App;
