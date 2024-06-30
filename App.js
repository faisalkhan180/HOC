
import "./App.css";
import { Suspense, useState, lazy } from "react";

const Mycomponent = lazy(()=> import("./components/Mycomponent"));

function App() {

  const [count, setCount] = useState(0);
  
  return (
   
      <>
      <Suspense fallback={<p>This Is Loading</p>}>
      <Mycomponent state = {count} />
      </Suspense>
      <button onClick={()=>setCount(count+1)}>count</button>
      </>
   
  );
}

export default App;
