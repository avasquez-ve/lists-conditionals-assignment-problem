import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  // Mi state
  state = {
    inputVal: "",
    lengthInput: 0
  }

  // Métodos
  changeInputHandler = (event) => {
    //Cómo no hacerlo en React
    /* const inputLength = event.target.value.length;
    const output = document.querySelector("#inputOutput");
    output.textContent = inputLength;
    this.setState({
      inputVal: event.target.value,
      lengthInput: inputLength
    }) */

    //Cómo sí hacerlo en React
    this.setState({
      inputVal: event.target.value,
      lengthInput: event.target.value.length
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.inputVal.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({
      inputVal: updatedText,
      lengthInput: updatedText.length
    })
  }

  render() {
    // css en linea
    const style = {
      fontWeight: "bold"
    }

    // Contenido dinámico
    let charComponentHtml = null;
    if (this.state.lengthInput > 0) {
      charComponentHtml = this.state.inputVal.split("").map((char, index) => {
        return <Char character={char} key={index} clicked={() => {this.deleteCharHandler(index)}} />
      })
    }

    return (
      <div className="App">
        <h1>Segunda tarea del curso de React:</h1>
        <p className="withLink"><a className="App-link" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">https://www.udemy.com/course/react-the-complete-guide-incl-redux/</a></p>
        <br/>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).✔</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
  
        <input type="text" onChange={this.changeInputHandler} value={this.state.inputVal} />

        <p>Length of your string: <span style={style}>{this.state.lengthInput}</span></p>
        <Validation strLength={this.state.lengthInput} />

        {charComponentHtml}
      </div>
    );
  }
}

export default App;
