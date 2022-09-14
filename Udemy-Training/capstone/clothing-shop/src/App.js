import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Nav/navigation.component";

import Home from "./Routes/home.component";

import Authenication from "./Routes/authentication/authentication.component";

const App = () => {
  const Shop = () => {
    return <h1>I am a shop</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authenication />} />
      </Route>
    </Routes>
  );
};

export default App;
