import '../css/main.less';
import '../css/estilos.css';

import data from './teachers.json';

import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';

const $button = document.getElementById('dynamic-import');

$button.addEventListener('click', async () => {
  const { default: alerta } = await import('./alerta.js');
  alerta();
});

render(<Teachers data={data.teachers}/>, document.getElementById('container'))
