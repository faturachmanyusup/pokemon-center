import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe("App should work correcly", () => {
  const { getByTestId } = render(<App />);
  
  test('App should have navbar', () => {
    const navbar = getByTestId('navbar');
    const dashboardPage = getByTestId('dashboard-page');
    expect(navbar).toBeInTheDocument();
    expect(dashboardPage).toBeInTheDocument();
  })
  
  test('Navbar links work properly', () => {
    const { getByTestId } = render(<App />);
    const linkToDashboard = getByTestId('dashboard-link');
    const linkToFavorites = getByTestId('favorites-link');
    fireEvent.click(linkToFavorites);
    const favoritesPage = getByTestId('favorites-page')
    expect(favoritesPage).toBeInTheDocument();
    fireEvent.click(linkToDashboard);
    const dashboardPage = getByTestId('dashboard-page')
    expect(dashboardPage).toBeInTheDocument();
  })

})