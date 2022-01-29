import './App.css';
import Example from "./example3"
import Button from "./components/Button/index"


function App() {
  return (
      <div>
        <h3 style={{textAlign:'center'}}>hello react Hook</h3>
        <Example />
        <Button type="danger" disabled block>不可用</Button>
        <Button type="danger">注册</Button>
        <Button type="primary">注册</Button>
        <Button type="info">注册</Button>
        
        <Button> 默认 </Button>
        <Button type="danger" block >block</Button>
      </div>
  );
}

export default App;
