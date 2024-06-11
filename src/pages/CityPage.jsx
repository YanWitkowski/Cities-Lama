import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import AttractionCard from '../components/AttractionCard';
import FoodCard from '../components/FoodCard';
// import 'react-image-gallery/styles/css/image-gallery.css';
import { useParams } from 'react-router-dom';
import { citiesList } from '../helpers/data';
import MyCarouselComponent from '../components/MyCarouselComponent';
import Stars from '../components/Starts'

import Footer from './Footer';

export default function CityPage() {
	const { id } = useParams();
	const city = citiesList.find(city => city.id === parseInt(id));

	if (!city) {
		return <div>Город не найден</div>;
	}


	const historyParagraphs = city.history ? city.history.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph}</p>
	)) : null;

	const locationParagraphs = city.location ? city.location.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph}</p>
	)) : null;
	const weather = city.weather ? city.weather.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph}</p>
	)) : null;


	return (
		<div style={{ fontSize: 20 }}>
			<div style={{ width: '100%', height: '300px', overflow: 'hidden', marginTop: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center' }}>
				<img src={city.image} alt={city.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: -1 }}></div>
				<h2 className='cities__title' style={{ fontSize: 65, margin: 0 }}>{city.name}</h2>
				<p style={{ fontSize: 20, margin: 0 }}>Население: {city.population} человек</p>
			</div>
			<h3 className='cities__title'>История города</h3>
			<p>{historyParagraphs}</p>
			<h3 className='cities__title'>Географическое местоположение</h3>
			<p>{locationParagraphs}</p>



			<MyCarouselComponent city={city} />

			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Местные достопримечательности</h3>

			<div className="attraction-cards">
				{city.attractions && city.attractions.map((attraction, index) => (
					<AttractionCard key={index} attraction={attraction} />
				))}
			</div>
			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Еда</h3>
			<div className="food-cards">
				{city.food && city.food.map((food, index) => (
					<FoodCard key={index} food={food} />
				))}
			</div>

			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Местные события</h3>
			<ul>
				{city.local_events && city.local_events.map((event, index) => (
					<li key={index}>{event.description}</li>
				))}
			</ul>

			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Интересные факты</h3>
			<ul>
				{city.facts && city.facts.map((fact, index) => (
					<li key={index}>{fact.description}</li>
				))}
			</ul>

			<h3 className='cities__title'>Погода</h3>
			<p> {weather}</p>
			<WeatherComponent city={city} />

			<h3 className='cities__title' > Оцените город! </h3>
			<Stars style={{ marginBottom: " 50px" }} />
			{/* <Reviews /> */}

			<Footer style={{}} />
		</div >
	);
}
