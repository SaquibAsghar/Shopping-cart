import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast } from "react-toastify";
import { BuyPage } from "./Components/BuySection";

function App() {
	const [cartItem, setCartItem] = useState([]);

	const addToCart = (item) => {
		const isItemAlreadyAdded = cartItem.findIndex(function (array) {
			return array.id === item.id;
		});

		if (isItemAlreadyAdded !== -1) {
			toast("Already added in cart", {
				tyoe: "error",
			});
		}

		setCartItem([...cartItem, item]);
	};

	const buyNow = () => {
		setCartItem([]);
		toast("Item purchased", {
			type: "success",
		});
	};

	const removeItem = (item) => {
		setCartItem(
			cartItem.filter((cartItem) => {
				return cartItem.id !== item.id;
			})
		);
	};

  return (
		<div className="App">
			<BuyPage addToCart={addToCart} />
		</div>
	);
}

export default App;
