import CrudApi from "./components/CrudApi";
import { MyPage } from "./components/MyPage";
import { MyPageContext } from "./components/MyPageContext"
import { CrudProvider } from "./context/CrudContext";


function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a href="http://es.reactjs.org/docs/context.html"
      rel="noreferrer"
      target="_blank"
      >Documentación</a>
      
      <hr />



<CrudProvider>
    <CrudApi/>
    </CrudProvider>


    
      <hr/>
    <MyPageContext/>



    <hr />
      <MyPage/>

    </div>
  );
}

export default App;
