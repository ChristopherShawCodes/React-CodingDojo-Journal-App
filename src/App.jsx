import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Entry from './Components/Entry'
import {useState} from 'react'

function App() {
  const [entries,setEntries] = useState([])


  return (
    <div className="App">
    <Header/>
    <Form setEntries={setEntries}
        entries={entries}
    />
    {entries.map((entry,index)=>{
      return<Entry key={index} entry={entry}/>
    })}
    </div>
  );
}

export default App;
