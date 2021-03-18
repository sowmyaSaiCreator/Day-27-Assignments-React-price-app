import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import Price from "./price"

library.add(faCheck,faTimes)
function App() {
  let users = [
    { subscription: "FREE", price: 0, members: "Single User", storage: "5GB", domain: "Free Subdomain" },
    { subscription: "PLUS", price: 9, members: "5 Users", storage: "50GB", domain: "Free Subdomain" },
    { subscription: "PRO", price: 49, members: "Unlimited Users", storage: "150GB", domain: "Unlimited Free Subdomains" }
  ]


  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            users.map((user,index) => {
              return <Price key={index} property={user}></Price>
            })
          }
        </div>
      </div>
    </section>

  );
}

export default App;
