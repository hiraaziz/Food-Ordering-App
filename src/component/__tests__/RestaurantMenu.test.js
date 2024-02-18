import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react"
import Cardlist from "../body/Cardlist";
import MOCK_DATA from "../mocks/resMenuMock";

it("should render RestaurantCard component with props Data",()=>{
    render(
        < Cardlist {...MOCK_DATA}/>
    )
    const name = screen.getByText( "Theory Of Omelette")
    expect(name).toBeInTheDocument()
})