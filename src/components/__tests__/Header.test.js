import Header from '../Header';
import { screen, render } from '@testing-library/react';
import "@testing-library/jest-dom"
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore'
import { BrowserRouter } from 'react-router-dom';

it("should load Header component with a login button", () => {
    render(<BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>)

    const loginBtn = screen.getByText("Login")

    expect(loginBtn).toBeInTheDocument();
})

test("should render the Header Component with Cart items 0", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart-(0 Items)")

    expect(cartItems).toBeInTheDocument();
})

test("should render the Header Component with Cart ", () => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )

    // It will access the Cart element
    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument();
})