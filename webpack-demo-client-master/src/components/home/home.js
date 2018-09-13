import React from 'react';
const Home = () => (
    <div>
      <h2 id="home">aslkdfj</h2>
    </div>
);


document.addEventListener('DOMContentLoaded',()=>{

    let home = document.querySelector('#home');
    home.onclick = ()=>{
        console.log('12234');
    }
    console.log(home);
})




export default Home;