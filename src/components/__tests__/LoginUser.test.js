import Body from "../Body"
import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from '../mockData/resListMockData.json'
import RestaurantCart from "../RestaurantCart"
import CARD_DATA from '../mockData/restaurantcartData.json'
import { Provider } from "react-redux"
import { LoginUser } from "../../utils/loginUser"

global.fetch=jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}))

test("should render the input field in the body component", async () => {
    await act(async () => render(<BrowserRouter>
    <Body/>
    </BrowserRouter>))

    expect(screen.getByTestId('userInput')).toBeInTheDocument()
})

// it("should update userName in the restaurantCard when we type in input field", async () => {
    
//     await act(async () => render(<BrowserRouter>
//     <LoginUser.Provider>
//         <Body/>
//         <RestaurantCart resObj={CARD_DATA}/>
//         </LoginUser.Provider>
//         </BrowserRouter>))

//     const inputName = screen.getByTestId('userInput')

//     fireEvent.change(inputName,{ target: { value: 'Sachin'} })
    
//     expect(screen.getAllByTestId('userName').length).toBe(21)

// })