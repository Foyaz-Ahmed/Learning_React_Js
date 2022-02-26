import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import PropsFunction from './mycomponents/Props';

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Welcome></Welcome>

      {/* Props Function */}
      <PropsFunction name="Foyaz Ahmed" age="21"></PropsFunction>
      <PropsFunction name="Bulbul Ahmed" age="22"></PropsFunction>
      <PropsFunction name="Mahin Ahmed" age="23"></PropsFunction>
      <PropsFunction name="Nazim Ahmed" age="24"></PropsFunction>
    </div>
  );
}
// something 
export default App;
