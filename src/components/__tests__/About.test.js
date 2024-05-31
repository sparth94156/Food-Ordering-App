import { screen, render, waitFor } from "@testing-library/react"
import About from '../About'
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"

describe("About us page Test Cases", () => {

    // beforeAll(() => {
    //     console.log("Before all Test cases")
    // })
    
    test("should render the header component", () => {
        // Whenever ur testing the UI component inside react, you'll have to render that component onto the jsdom.
        render(<BrowserRouter>
        <Provider store={appStore}>
        <About />
        </Provider>
        </BrowserRouter>)
    
        // Querying 
        const heading = screen.getAllByRole("heading")
        // console.log(heading)
    
        // Assertion
        expect(heading.length).toBe(3);
    })
    
    test("should render the About component with the heading element", () => {
        // Whenever ur testing the UI component inside react, you'll have to render that component onto the jsdom.
        render(<BrowserRouter>
            <Provider store={appStore}>
            <About />
            </Provider>
            </BrowserRouter>)
    
        // Querying 
        const heading = screen.getAllByRole('heading')
        
        // Assertion
        waitFor(() => expect(heading).toBeInTheDocument()) 
    })
})


