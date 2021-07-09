import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TableTop from 'tabletop';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    TableTop.init({
    key: 'YOUR_KEY',
      callback: googleData => {
        setData(googleData);
      },
      simpleSheet: true
    })
  }, []);

  console.log('updated state --->', data)

  return (

    <div className="App">
      <div id="employee-details">
          {
            data.map(obj => {
              return (
                <div key={obj.name}>
                  <p>{obj.name}</p>
                  <p>{obj.favDog}</p>
                  <img alt={obj.favDog} src={obj.img} />
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default App;
