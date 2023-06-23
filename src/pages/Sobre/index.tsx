import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';
import stylesTema from '../../styles/Tema.module.scss';
import styles from './Sobre.module.scss';

const imagens = [massa1, massa2];

export default function Sobre() {
	return (
		<section>
			<h3 className={stylesTema.titulo}>Sobre</h3>
			<div className={styles.sobreNos}>
				<img src={casa} alt="Restaurante" />
				<div className={styles.sobreNos__texto}>
					<p>Texto sobre o restaurante</p>
				</div>
			</div>
			<div className={styles.imagens}>
				{imagens.map((imagem, index) => (
					<div key={index} className={styles.imagens__imagem}>
						<img src={imagem} alt="Imagem de massa " />
					</div>
				))}
			</div>
		</section>
	);
}
