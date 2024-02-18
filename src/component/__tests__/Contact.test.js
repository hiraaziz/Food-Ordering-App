import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Contact from "../contact/Contact"

describe("Contact Us Page Test Cases", ()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>)
        const heading = screen.getByRole("heading", { name: "Get in Touch" });
        expect(heading).toBeInTheDocument()
    })
    it("Should load button inside Contact component",()=>{
        render(<Contact/>)
        const button = screen.getByText("Send Message");
        expect(button).toBeInTheDocument()
    })  
})

