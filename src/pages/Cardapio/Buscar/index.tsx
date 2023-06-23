import React from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './Busca.module.scss';

interface Props {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscar({ busca, setBusca }: Props) {
	return (
		<div className={styles.buscador}>
			<input
				value={busca}
				onChange={(event) => setBusca(event.target.value)}
				placeholder="Buscar"
			/>
			<CgSearch size={20} color="#4C4D5E" />
		</div>
	);
}
