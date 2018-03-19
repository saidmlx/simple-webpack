import '../css/main.less';
import '../css/estilos.css';

import data from './teachers.json';

import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';

render(<Teachers data={data.teachers}/>, document.getElementById('container'))
