import React, { useState } from 'react';
import './App.css';
import Clock from './component/Clock';
import { nanoid } from 'nanoid';



function App() {
  const [data, setData] = useState({ name: '', timezone: '' });
  const [formdata, setFormdata] = useState([]);


  const inputChange = (e) => {
    setData(prev => ({ ...data, [e.target.name]: e.target.value }))

  }

  const formSubmit = (evt) => {
    evt.preventDefault();
    setFormdata(prev => [...formdata, { name: data.name, timezone: data.timezone, id: nanoid(4).toLowerCase() }], console.log(formdata));
    setData(prev => ({ ...data, name: '', timezone: '' }))
  }


  return (
    <div className="App">
      <form onSubmit={formSubmit} >
        <div className='input'>
          <span>Название</span>
          <input name='name' type='text' value={data.name} onChange={inputChange}></input>
        </div>
        <div className='input'>
          <span>Временная зона</span>
          <input name='timezone' type='text' value={data.timezone} onChange={inputChange} placeholder='+03 or -03'></input>
        </div>
        <button onClick={formSubmit}>Добавить</button>
      </form>
      <Clock data={formdata} changedata={setFormdata} />
    </div>
  );
}

export default App;
