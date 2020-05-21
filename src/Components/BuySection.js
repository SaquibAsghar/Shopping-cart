import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Card, CardBody, Col, Row } from "reactstrap";
import { random, commerce } from "faker";
import CartItem from "./CardItem";

const apiKey = "INSERT_YOUR_KEY_HERE";

const url = "https://api/pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl =
	"https://jsonware.com/json/79433719b0abd7e67d8d0335a841e252.json";
export const BuyPage = ({ addToCart }) => {
	const [product, setProduct] = useState([]);

	// const fetchPhotos = async()=> {
	//     const response = await Axios.get(url, {
	//         header: {
	//             Authorization: apiKey
	//         }
	//     })
	// }
	const fetchPhotos = async () => {
		const { data } = await Axios.get(localUrl);

		const { photos } = data;
		console.log(photos);
		const allProduct = photos.map((photo) => ({
			smallImage: photo.src.medium,
			tinyImage: photo.src.tiny,
			productName: random.word(),
			productPrice: commerce.price(),
			id: random.uuid(),
		}));

		setProduct(allProduct);
	};
	useEffect(() => {
		fetchPhotos();
	}, []);

	return (
		<Container fluid>
			<h1 className="text-success text-center">Buy Page</h1>
			<Row>
				{product.map((product) => (
					<Col md={4} key={product.id}>
						<CartItem product={product} addToCart={addToCart} />
					</Col>
				))}
			</Row>
		</Container>
	);
};
