import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react"
import Navbar from "../navbar/Navbar"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import {BrowserRouter } from 'react-router-dom';

it("Should load navbar component with a login button",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter> <Navbar/></BrowserRouter>
        </Provider>
    )
    const cartItem = screen.getByText("Cart 0 items");
    expect(cartItem).toBeInTheDocument();
})

it("Should load navbar component with a Cart Item",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter> <Navbar/></BrowserRouter>
        </Provider>
    )
    const cartItem = screen.getByText(/Cart/i);
    expect(cartItem).toBeInTheDocument();
})

it("Should change login button to logout on click",()=>{
    render(
        <Provider store={appStore}>
            <BrowserRouter> <Navbar/></BrowserRouter>
        </Provider>
    )

    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:/Logout/i});
    expect(logoutButton).toBeInTheDocument();
})