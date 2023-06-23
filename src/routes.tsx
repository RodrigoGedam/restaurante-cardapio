import Footer from 'components/Footer';
import Menu from 'components/Menu';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import PaginaBase from 'pages/PaginaBase';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardapio from './pages/Cardapio';

export default function AppRoutes() {
	return (
		<main className="container">
			<BrowserRouter>
				<Menu />
				<Routes>
					<Route path="/" element={<PaginaBase />}>
						<Route index element={<Inicio />} />
						<Route path="cardapio" element={<Cardapio />} />
						<Route path="sobre" element={<Sobre />} />
					</Route>
					<Route path="prato/:id" element={<Prato />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	);
}
