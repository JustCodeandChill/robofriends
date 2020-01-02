import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx'
import {SearchBox} from './components/search-box/search-box.component'
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello Kasaruy
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: ''
    }

    this.handleChange1 = this.handleChange1.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => this.setState({monsters : users})
    )
  }

  handleChange1(e){
    this.setState({searchField : e.target.value})
  }
  render(){
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
      return (
        <div className="App"> 
          <h2>Robodex</h2>
          <SearchBox placeholder='search monster' handleChange={this.handleChange1} />
          <CardList monsters={filterMonsters}/>
        </div>
      );
  }
}

export default App;
