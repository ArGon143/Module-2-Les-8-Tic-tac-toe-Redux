import styles from './Game.module.css';
import { RefreshGame } from './RefreshGame';
import { BoardContainer } from './BoardContainer';
import { useEffect, useState } from 'react';
import { store } from '../store/store';

export const GameContainer = () => {
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		store.subscribe(() => {
			setRerender(!rerender);
		});
	}, [rerender, setRerender]);

	return (
		<div className={styles.app}>
			<section className={styles.section}>
				<BoardContainer />
				<RefreshGame />
			</section>
		</div>
	);
};
