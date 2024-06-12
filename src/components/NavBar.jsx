import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import TextField from '@mui/material/TextField';
import { citiesList } from '../helpers/data';
import Autocomplete from '@mui/material/Autocomplete';

export default function NavBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	const handleSearch = (event) => {
		event.preventDefault();
		const filteredCities = citiesList.filter((city) =>
			city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
		);
		// Perform search logic here, e.g., navigate to the city page
		// For simplicity, let's assume the city ID is the same as the search term
		if (filteredCities.length > 0) {
			navigate(`/city/${filteredCities[0].id}`);
		}
	};

	return (
		<Box sx={{ flexGrow: 1 }} className="navbar">
			<AppBar position="static" sx={{ backgroundColor: '#42365C' }}>
				<Toolbar>
					<MapIcon style={{ marginRight: '10px', fontSize: '50px' }} />

					<Typography
						variant="h5"
						component={Link}
						to="/"
						sx={{ flexGrow: 1, fontFamily: 'Neucha', textDecoration: 'none', color: 'white' }}
					>
						Путеводитель по городам России
					</Typography>
					<Button component={Link} to="/" color="inherit">
						Home
					</Button>
					<form onSubmit={handleSearch}>
						<Autocomplete
							freeSolo
							options={citiesList.map((city) => city.name)}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Найти город"
									variant="outlined"
									size="small"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									sx={{
										width: 300,
										marginLeft: '10px',
										'& .MuiOutlinedInput-root': {
											'& fieldset': {
												borderColor: 'white',
											},
											'&:hover fieldset': {
												borderColor: 'white',
											},
											'&.Mui-focused fieldset': {
												borderColor: 'white',
											},
										},
										'& .MuiInputLabel-root': {
											color: 'white !important',
										},
										'& .MuiInputBase-input': {
											color: 'white !important',
										},
										'& .MuiOutlinedInput-input': {
											backgroundColor: '#524570',
										},
									}}
									InputLabelProps={{
										style: { color: 'white' }, // Ensure the label is white
									}}
								/>
							)}
							onChange={(event, value) => {
								if (value) {
									const city = citiesList.find((city) => city.name === value);
									if (city) {
										navigate(`/city/${city.id}`);
									}
								}
							}}
						/>
					</form>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
