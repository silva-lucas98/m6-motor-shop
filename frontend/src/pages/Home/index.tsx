import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import {
	Section,
	ContainerButtons,
	ContainerInfo,
	InfoHome,
	InfoSection,
	ListCards,
	TitleHome,
	TitleSection,
} from "./style";

const Home = () => {
	const user = [
		{
			id: 1,
			userName: "Felipe Vieira",
			urlImage:
				"https://www.webmotors.com.br/wp-content/uploads/2020/06/03124927/Mercedes-Benz-A200-Sedan-49.jpg",
			title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 1000,
			year: 1990,
			price: "R$ 170.000,00",
			typeAnnouncement: "Leilão",
			typeVehicle: "Carro",
		},
		{
			id: 2,
			userName: "Daniel Galvan",
			urlImage:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAvnGucdcwtnFB-XlqsKRLkiQEBfGGSgZSw3ls0BORMYzWRX65FR41wfZcKPfMkY9ATD1kp0KAVDPTyeif9czApW5NnwGu7wZscZcffB4TLWJNOt6v0XH2fbBunyyH0RrYuL-u4thKtifYF08VrdgULlqg2p_GxtDIWAoakrjJOnSynJdy48fxN29OyA/s2560/Chevrolet-Tracker-2023%20%281%29.jpg",
			title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 1000,
			year: 1990,
			price: "R$ 150.000,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Carro",
		},
		{
			id: 3,
			userName: "Carlos Santos",
			urlImage:
				"https://www.infomoney.com.br/wp-content/uploads/2022/05/carros-de-luxo-e1653484670585.jpg?quality=70",
			title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 1000,
			year: 1990,
			price: "R$ 200.000,00",
			typeAnnouncement: "Leilão",
			typeVehicle: "Carro",
		},
		{
			id: 4,
			userName: "Lucas Silva",
			urlImage:
				"https://cdn.autopapo.com.br/box/uploads/2022/03/25160359/fiat-mobi-trekking-2023-cinza-frente-scaled.jpg",
			title: "Fiat Mobi Trekking",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 0,
			year: 2023,
			price: "R$ 61.990,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Carro",
		},
		{
			id: 5,
			userName: "Vagner Mengali",
			urlImage: "https://img.olx.com.br/images/24/243227917750564.jpg",
			title: "VW VOYAGE 1.6 MSI FLEX",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 1002000,
			year: 2018,
			price: "R$ 55.990,00",
			typeAnnouncement: "Leilão",
			typeVehicle: "Carro",
		},
		{
			id: 6,
			userName: "Gabriel Alencar",
			urlImage: "https://seminovosrj.com.br/fotos/716/801976/5.jpg",
			title: "Fiat Idea Adventure",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 80000,
			year: 2012,
			price: "R$ 26.000,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Carro",
		},
		{
			id: 7,
			userName: "João Silva",
			urlImage:
				"https://cdn.motor1.com/images/mgl/kNb2n/s1/2020-bmw-m235i-gran-coupe-exterior.jpg",
			title: "2020 BMW M235i Gran Coupe",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 30000,
			year: 2020,
			price: "R$ 190.000,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Carro",
		},
		{
			id: 8,
			userName: "Marcelo Santos",
			urlImage:
				"http://motosnovas.com.br/wp-content/uploads/2017/08/novo-fusion-2018.jpg",
			title: "Ford Fusion 2.0",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 50000,
			year: 2018,
			price: "R$ 140.000,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Carro",
		},
		{
			id: 9,
			userName: "Fernando Pereira",
			urlImage:
				"https://s2.glbimg.com/92r7jYWjoi4Zs061grtdrTnYCPY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/O/o/Qcxq55QfurpcchPkOKZw/2018-08-14-kawasaki-ninja-400-estudio-07.jpg",
			title: "Kawasaki Ninja 400",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 50000,
			year: 2018,
			price: "R$ 28.900,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Moto",
		},
		{
			id: 10,
			userName: "Sara Almeida",
			urlImage:
				"https://http2.mlstatic.com/D_NQ_NP_707660-MLB53314616396_012023-O.webp",
			title: "Honda cg 160",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 50000,
			year: 2018,
			price: "R$ 15.900,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Moto",
		},
		{
			id: 11,
			userName: "Daniele Mendes",
			urlImage:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0PgljrarSGfMWJkt0mVHw2q9qmrifGR_DDcORCwkRNj2oDCuuabDlhDXEQKT38wkOlw&usqp=CAU",
			title: "Yamaha 250 2021",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 35000,
			year: 2021,
			price: "R$ 21.000,00",
			typeAnnouncement: "Leilão",
			typeVehicle: "Moto",
		},
		{
			id: 12,
			userName: "Paulo Marques",
			urlImage:
				"https://www.motonline.com.br/noticia/wp-content/uploads/2022/06/teste-gsx-s-750-9.jpg",
			title: "Suzuki 750",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 10000,
			year: 2022,
			price: "R$ 45.000,00",
			typeAnnouncement: "Venda",
			typeVehicle: "Moto",
		},
	];
	return (
		<>
			<header
				style={{
					width: "100%",
					height: "80px",
					backgroundColor: "var(--grey6)",
				}}
			>
				Motors Shop
			</header>
			<main id="#home">
				<InfoSection>
					<ContainerInfo>
						<TitleHome>
							Velocidade e experiência em um lugar feito para você
						</TitleHome>
						<InfoHome>
							Um ambiente feito para você explorar o seu melhor
						</InfoHome>
						<ContainerButtons>
							<Button
								component="big"
								bgcolor="tranparent"
								color="grey10"
								border="grey10"
								width="fullWidth"
							>
								Carros
							</Button>
							<Button
								component="big"
								bgcolor="tranparent"
								color="grey10"
								border="grey10"
								width="fullWidth"
							>
								Motos
							</Button>
						</ContainerButtons>
					</ContainerInfo>
				</InfoSection>
				<Section>
					<TitleSection>Leião</TitleSection>
					<ListCards>
						{user.map(
							(vehicle) =>
								vehicle.typeAnnouncement === "Leilão" && (
									<Card
										key={vehicle.id}
										auction
										userName={vehicle.userName}
										urlImage={vehicle.urlImage}
										description={vehicle.description}
										mileage={vehicle.mileage}
										year={vehicle.year}
										price={vehicle.price}
									/>
								)
						)}
					</ListCards>
				</Section>
				<Section>
					<TitleSection>Carros</TitleSection>
					<ListCards>
						{user.map(
							(vehicle) =>
								vehicle.typeVehicle === "Carro" && (
									<Card
										key={vehicle.id}
										userName={vehicle.userName}
										urlImage={vehicle.urlImage}
										description={vehicle.description}
										mileage={vehicle.mileage}
										year={vehicle.year}
										price={vehicle.price}
									/>
								)
						)}
					</ListCards>
				</Section>
				<Section>
					<TitleSection>Motos</TitleSection>
					<ListCards>
						{user.map(
							(vehicle) =>
								vehicle.typeVehicle === "Moto" && (
									<Card
										key={vehicle.id}
										userName={vehicle.userName}
										urlImage={vehicle.urlImage}
										description={vehicle.description}
										mileage={vehicle.mileage}
										year={vehicle.year}
										price={vehicle.price}
									/>
								)
						)}
					</ListCards>
				</Section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
