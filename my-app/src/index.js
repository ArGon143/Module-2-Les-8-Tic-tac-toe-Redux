import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import { GameContainer } from './components/GameContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GameContainer />
	</React.StrictMode>,
);
