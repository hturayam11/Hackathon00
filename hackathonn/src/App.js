
import './App.css';
import axios from "axios"
import { useState } from 'react';
import logo from "./logo-no-background.png"

function App() {
  const url = "http://localhost:3001";
  const [serverResponse, setServerResponse] = useState();
  const [name, setName] = useState();

  function callGet() {
    axios.get(url)
      .then((response) => {
        setServerResponse(response.data);
      });
  }

  function callPost(data) {
    // let data = '?lang=c++';
    console.log(data)
    axios.post(url, data)
      .then((response) => {
        setServerResponse(response.data);
      });
  }

  function callPut() {
    let data = '?lang=python&index=0';
    axios.put(url + data)
      .then((response) => {
        setServerResponse(response.data);
      });
  }

  function callDelete() {
    axios.delete(url)
      .then((response) => {
        setServerResponse(response.data);
      });

  }

  const handleChange = event => {
    setName(event.target.value);

    console.log('name is:', event.target.value);
  }


  return (
    <div className="App">
      {serverResponse}
      <button onClick={callGet}>Get</button>
      <button onClick={callPost}>Post</button>
      <button onClick={callPut}>Put</button>
      <button onClick={callDelete}>Delete</button>

      <div>
        <section className="splash">
          <div className="container">
            <img src={logo} alt="FoodWaste Prevention Logo" className="logo" />
            
            <h4>Join us in our mission to reduce food waste and protect the environment. Together, we can make a difference!</h4>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rjxwfp8rs34?si=Zjo0ooeLsse28Oal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div id="clickHere" className="clickHere"><h4>Click here to learn more about us and our mission</h4></div>
            <div id="learn" className="learn"><a href="#about" className="btn">Learn More</a></div>
          </div>

        </section>

       
        <section id="about" className="about">
          <div className="container">
            <h2>About Us</h2>
            <h4>Welcome to our food waste prevention app! We are passionate about reducing food waste and protecting the environment.</h4>
            <h4>Our mission is to provide you with easy-to-use tools and resources to help you minimize food waste in your daily life. By making small changes in our habits, we can all make a big difference.</h4>
            <h4>Together, let's work towards a world with less food waste and a healthier planet for future generations!</h4>
          </div>
        </section>

        <section>
          <h3>Here are some tips to help prevent food waste</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KZf9_GdDff0?si=fInuBvjhxxHx87iq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        <section>
          <h3 id="thoughts" className="thoughts" >Share with us your thoughts on how to stop food waste</h3>
          <textarea id="Username" value={name} onChange={handleChange} /> <button onClick={() => callPost({ name })}>Submit</button>
          <div>{serverResponse}</div>
        </section>



      </div>


    </div>
  );
}

export default App;
