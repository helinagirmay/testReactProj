import React from 'react';
import ReactDOM from 'react-dom';
import HOC from './../hoc';
import Home from './../home';


import {render, screen,  getByTestId,} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.getByTestId('home');
    expect(linkElement).toBeInTheDocument();
  });