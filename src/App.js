import { data } from "./data";

function App() {
  console.log(data);
  return (
    <div className="headerOptions">
      <header className="row">
        <a className="brand" href="index.html">
          Amazon
        </a>
        <a className="cart" href="cart.html">
          Cart
        </a>
        <a className="sign_in" href="signin.html">
          Sign In
        </a>
      </header>

      <main>
        <div className="row center">
          {data.products.map((product) => (

            <div className="card" key={product._id}>

              <a href={`product/${product._id}`}>
                
                <img className="medium" src={product.Image} alt={product.name} />
              </a>
              <div className="card-body">

              <a href={`product/${product._id}`}>
                
                <h2>{product.name}</h2> 
              </a>

         

                
             

                <div className="ratings">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="row center">All right reserved!</footer>
    </div>
  );
}

export default App;
