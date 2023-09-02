import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Transfer from "./Components/Transfer/Transfer"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Certificates from "./Components/Certificates/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Details from "./Details/SinglePage"

/*-------------blog------------ */
import Balance from "./Components/Balance/Blog"
import BlogSingle from "./Components/Balance/blog-single-page/BlogSingle"
import Feedback from "./Components/FeedBack/Feedback"
import Customer_Service from "./Components/Customer Service/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/Transfer' exact component={Transfer} />
          <Route path='/Certificates' exact component={Certificates} />
          <Route path='/Details/:id' component={Details} />
          <Route path='/Balance' exact component={Balance} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/Feedback' component={Feedback} />
          <Route path='/Customer Service' component={Customer_Service} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
