import Header from "./components/Header/Header";
import Registration from "./pages/Registration/Registration";


function App() {
  return (
    <div className="app">
      <Header isAuth={false} />
      {/* <Signin /> */}
      <Registration />
    </div>
  );
}

export default App;
