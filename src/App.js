import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js'

function App() {
  //store our color from user input here
  const [colorValue, setColorValue] = useState('');
  //error
  const [error, setError] = useState(false);
  //list with colors
  const [list, setList] = useState([]);

  // SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
    //get color values from values library
    //and handle library default error by ourselves with try/catch
    try {
      let colors = new Values(colorValue).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error)
    }
  }

  //INPUT CHANGE
  const onChangeHandler = (e) => {
    e.preventDefault();
    //set color to input value
    setColorValue(e.target.value);
  }

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={submitHandler}>

          <input
            type="text"
            placeholder="#f15025"
            className={error ? 'error' : null}
            value={colorValue}
            onChange={onChangeHandler}
          />
          <button className="btn" type="submit">submit</button>

        </form>
        <p className="error-message">{error ? 'please enter proper value' : ''}</p>
      </section>
      <section className="colors">

      </section>
    </>
  );
}

export default App;
