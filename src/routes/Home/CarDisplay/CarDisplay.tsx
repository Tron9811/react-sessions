import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Car from "../../../globals/models/Car";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CarDisplayPaperProps {
	Car: Car;
}

const CarPaper = (props: CarDisplayPaperProps): JSX.Element => {
	const carData = props.Car;
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia>
					<img src={carData.imageUrl} alt="image" />
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{carData.year} {carData.make} - {carData.model}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Horsepower: {carData.horsepower}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Torque: {carData.torque}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</>
	);
};

interface CarDisplayProps {
	CarData: Car[];
}

const CarDisplay = (props: CarDisplayProps): JSX.Element => {
	console.table(props.CarData);

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 1,
					width: 128,
					height: 128,
				},
			}}
		>
			{props.CarData.map((data, index) => (
				<Paper elevation={3} key={index}>
					<CarPaper Car={data} />
				</Paper>
			))}
		</Box>
	);
};

export default CarDisplay;
