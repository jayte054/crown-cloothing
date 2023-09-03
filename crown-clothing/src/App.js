import { Routes, Route} from "react-router-dom";
import Homepage from "./routes/homepage/homepage";
import Navigation from "./routes/navigation/navigationBar.routes";
import Authentication from "./routes/authentication/authentication.routes";
import Shop from "./routes/shop/shop.component";
import CheckoutPage from "./routes/checkoutpage/checkoutpage.component";



const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element = {<Homepage />}/>
        <Route path="/shop/*" element = {<Shop />} />
        <Route path="/auth" element = {<Authentication />} />
        <Route path="/checkoutpage" element = {<CheckoutPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
