import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../body/Body";
import MENU_DATA from '../mocks/mockAllRestaurant'
import { act } from "react-dom/test-utils";
import {BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(()=>{
    return Promise.resolve(MENU_DATA)
        
    
})

it("Should render the Body Component with Search",async()=>{
  
    await act(async()=>render(
        <BrowserRouter>
        <Body/> 
        </BrowserRouter>))

// const search = screen.getByRole("button",{name:"Search"	})
// expect(search).toBeInTheDocument();


})