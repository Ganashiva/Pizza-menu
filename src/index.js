import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        <h1>The Pizza Shop!!!</h1>
      </div>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;

  //const pizza = [].length;

  return (
    <menu className="menu">
      <h2>Our Menu</h2>
      <>
        {pizzas ? ( // &&
          <>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza
                  // name={pizza.name}
                  // ingredients={pizza.ingredients}
                  // photoName={pizza.photoName}
                  // price={pizza.price}
                  // soldOut={pizza.soldOut}
                  pizzaObj={pizza}
                />
              ))}
            </ul>
          </>
        ) : null}
      </>
      {/* <Pizza
        pizzaName="Pizza Prosciutto"
        ingredients=" Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={100}
      />
      <Pizza
        pizzaName="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={120}
      /> */}
    </menu>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 13;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;
  // ? alert("Shop is opened...")
  // : alert("Shop closed...");

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. Shop is currently opened{" "} */}
      {isOpen ? (
        <div className="order">
          {/* {isOpen && <p>OPEN</p>}</div> */}

          <p>
            We are opened till at {closeHours}:00PM. You can order the pizza..
          </p>
          <button className="btn">OPEN</button>
        </div>
      ) : (
        <p>
          {" "}
          We are open between {openHours}PM to {closeHours}PM...{" "}
        </p>
      )}
    </footer>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    <App />{" "}
  </React.StrictMode>
);
