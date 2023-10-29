import AuthPage from "./custom/AuthPage.tsx";
import "./index.css";

function App() {
  return (
    <AuthPage
      setLoggedInUser={(user) => {
        console.log(user);
      }}
    />
  );
}

export default App;
