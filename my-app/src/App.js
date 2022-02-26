import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import PropsFunction from './mycomponents/Props';
import PropsClass from './mycomponents/PropsClass';

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Welcome></Welcome>

      {/* Props Used in Function */}
      <PropsFunction name="Foyaz Ahmed" age="21"></PropsFunction>
      <PropsFunction name="Bulbul Ahmed" age="22"></PropsFunction>
      <PropsFunction name="Mahin Ahmed" age="23"></PropsFunction>
      <PropsFunction name="Nazim Ahmed" age="24"></PropsFunction>

      {/* Props Used in Class */}

      <PropsClass name="Foyaz"></PropsClass>
      <PropsClass name="Bulbul"></PropsClass>
      <PropsClass name="Nazim"></PropsClass>
      <PropsClass name="Mehedi"></PropsClass>
    </div>
  );
}
// something 
export default App;
