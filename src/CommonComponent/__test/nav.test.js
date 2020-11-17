import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './../nav';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom';


it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Nav></Nav>, div)
})

it('renders nav correctly', () => {
    const {getByTestId} =render(<Nav></Nav>)
    expect(getByTestId('navMenu')).toHaveStyle({float: 'right'})

})