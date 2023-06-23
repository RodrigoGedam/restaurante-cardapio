import nossaCasa from 'assets/nossa_casa.png';
import cardapio from 'data/cardapio.json';
import { useNavigate } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';
import { Prato } from 'types/Prato';
import styles from './Inicio.module.scss';

export default function Inicio() {
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 4);
	const navigate = useNavigate();

	function redirecionarDetalhes(prato: Prato) {
		navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
	}

	return (
		<section>
			<h3 className={stylesTema.titulo}>Recomendações</h3>
			<div className={styles.recomendados}>
				{pratosRecomendados.map((item) => (
					<div key={item.id} className={styles.recomendado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button
							className={styles.recomendado__botao}
							onClick={() => redirecionarDetalhes(item)}>
							Ver Mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTema.titulo}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Restaurante" />
				<div className={styles.nossaCasa__endereco}>
					Endereço do restaurante, 111 <br /> <br /> Bairro - Cidade
				</div>
			</div>
		</section>
	);
}
