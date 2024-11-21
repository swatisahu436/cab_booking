import './App.css';
import Header from './Component/Header';
function App() {
  return (
    
      <div className="container">
        {/* Header */}
      
  <Header/>
        {/* Hero Section */}
        <section className="hero">
          <img src="Frame 1686551801.png" alt="Mountain Background" className="hero-bg" />
            
          
        </section>
  
        {/* Features */}
        <section className="features">
          <div className="feature-card">
            <img src="Frame 1686551858.png" alt='hello'></img>
        </div>
        
        </section>
        <section>
        <div className="premier">
        <img src="India's Premier.png " alt='hello'></img>
          </div>
        </section>
  
        {/* Why Yatri Section */}
        <section className="why-yatri">
         <div>
          <img src='group.png' alt="hello"/>
          </div>
        </section>
  
        {/* Why Choose One Way Cab */}
        <section className="why-choose">
         <div>
            <img src="Frame 40280.png" alt="hello" />
          </div>
        </section>
        <section className="Choose-Cab">
         <div>
            <img src="Frame 40298.png" alt="hello" />
          </div>
        </section>
        <section className="photo1">
         <div>
            <img src="Frame 1686551849.png" alt="hello" />
          </div>
        </section>
        <section className="photo2">
         <div>
            <img src="Frame 1686551859.png" alt="hello" />
          </div>
        </section>
        <section className="footer">
         <div>
            <img src="Group 1686551514.png" className="footer-bg" alt="hello" />
          </div>
        </section>
      </div>
    
    
  );
}

export default App;
