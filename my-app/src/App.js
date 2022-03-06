import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import PropsFunction from './mycomponents/Props';
import PropsClass from './mycomponents/PropsClass';
import ClickEventFunction from './mycomponents/ClickEventFunction';
import ClickEventInClass from './mycomponents/ClickEventInClass';
import Arrow from './mycomponents/ArrowFunction';
import State from './mycomponents/State';
import SetStateChnge from './mycomponents/SetState';
import ConditionalIfelse from './mycomponents/Conditional';
import Element from './mycomponents/ElementVariable';
import Refresh from './mycomponents/Refresh';
import Render from './mycomponents/Render';
import FindDom from './mycomponents/FindDom';
import Form from './mycomponents/Form';
import MulitpleInput from './mycomponents/MulitpleInput';
import TextArea from './mycomponents/TextArea';
import List from './mycomponents/List';

function App() {
  return (
    <div className="App">

      {/* <Hello></Hello>
      <Welcome></Welcome> */}

      {/* Props Used in Function */}
      {/* <PropsFunction name="Foyaz Ahmed" age="21"></PropsFunction>
      <PropsFunction name="Bulbul Ahmed" age="22"></PropsFunction>
      <PropsFunction name="Mahin Ahmed" age="23"></PropsFunction>
      <PropsFunction name="Nazim Ahmed" age="24"></PropsFunction> */}

      {/* Props Used in Class */}
      {/* <PropsClass name="Foyaz"></PropsClass>
      <PropsClass name="Bulbul"></PropsClass>
      <PropsClass name="Nazim"></PropsClass>
      <PropsClass name="Mehedi"></PropsClass> */}

      {/* Click Event
      <ClickEventFunction></ClickEventFunction>
      <ClickEventInClass></ClickEventInClass> */}

      {/* Arrow Function
      <Arrow/> */}

      {/* state and nested state
      <State></State> */}
       {/* <SetStateChnge></SetStateChnge> 
       <ConditionalIfelse></ConditionalIfelse>
       <Element></Element>
       <Refresh></Refresh>
       <Render></Render>
       <FindDom></FindDom> */}
       
       {/* <Form></Form> */}

       {/* <MulitpleInput></MulitpleInput> */}
       {/* <TextArea/> */}
       <List></List>
    </div>
  );
}
// something 
export default App;
