import "../css/styles.css"

import data from './store.json'

import React  from 'react';
import { render } from 'react-dom'

import Products from './components/products'

render(<Products data={data}/>,document.getElementById("container"))
