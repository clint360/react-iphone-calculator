import './App.css';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button
          onButtonClick={handleButtonPress}
          content="AC"
          type="function"
        />
        <Button onButtonClick={handleButtonPress} content="±" type="function" />
        <Button onButtonClick={handleButtonPress} content="%" type="function" />
        <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
        <Button onButtonClick={handleButtonPress} content="7" />
        <Button onButtonClick={handleButtonPress} content="8" />
        <Button onButtonClick={handleButtonPress} content="9" />
        <Button onButtonClick={handleButtonPress} content="×" type="operator" />
        <Button onButtonClick={handleButtonPress} content="4" />
        <Button onButtonClick={handleButtonPress} content="5" />
        <Button onButtonClick={handleButtonPress} content="6" />
        <Button onButtonClick={handleButtonPress} content="−" type="operator" />
        <Button onButtonClick={handleButtonPress} content="1" />
        <Button onButtonClick={handleButtonPress} content="2" />
        <Button onButtonClick={handleButtonPress} content="3" />
        <Button onButtonClick={handleButtonPress} content="+" type="operator" />
        <Button onButtonClick={handleButtonPress} content="0" />
        <Button onButtonClick={handleButtonPress} content="." />
        <Button onButtonClick={handleButtonPress} content="=" type="operator" />
      </div>
    </div>
  );
}

export default App;
