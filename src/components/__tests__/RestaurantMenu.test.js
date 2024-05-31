import { BrowserRouter } from "react-router-dom"
import RestaurantMenu from "../restaurantMenu"
import { act } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import RES_MENU from '../mockData/resMenuMockData.json'
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from '../../utils/appStore'
import Header from '../Header'
import Cart from "../Cart"
import { template } from "@babel/core"

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(RES_MENU)
})
)

it("should render the Restaurant Menu component", async () => {

    // Wrapped inside provider for accesing redux store and browserRouter for link component
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>

    ))

    const accordianHeader = screen.getByText("Recommended (20)")

    expect(accordianHeader).toBeInTheDocument();

})

it("should render expand the accordian when we click", async () => {

    await act(async () => render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
        </Provider>
    </BrowserRouter>))
    

const accordianHeader = screen.getByText("Recommended (20)")

 //clicking the acordian header
 fireEvent.click(accordianHeader)

 expect(screen.getAllByTestId('foodItems').length).toBe(20)

})

it("should add 1 Cart Items when we click add", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart/>
            </Provider>
        </BrowserRouter>

    ))

    const accordianHeader = screen.getByText("Recommended (20)")

    fireEvent.click(accordianHeader)

    const addBtns = screen.getAllByRole('button', { name: 'ADD' })

    expect(screen.getByText('Cart-(0 Items)')).toBeInTheDocument()

    fireEvent.click(addBtns[0])

    expect(screen.getByText('Cart-(1 Items)')).toBeInTheDocument()
})

it("should add 1 more Cart Items when we click add", async () => {

    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart/>
            </Provider>
        </BrowserRouter>

    ))

    const accordianHeader = screen.getByText("Recommended (20)")

    fireEvent.click(accordianHeader)

    const addBtns = screen.getAllByRole('button', { name: 'ADD' })

    expect(screen.getByText('Cart-(1 Items)')).toBeInTheDocument()

    fireEvent.click(addBtns[4])

    expect(screen.getByText('Cart-(2 Items)')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button',{name: 'Clear Cart'}))
    
    expect(screen.getAllByTestId('foodItems').length).toBe(20)
})

it('should update the cartList of the Cart component when we click add', async () => {

    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart/>
            </Provider>
        </BrowserRouter>

    ))

    const accordianHeader = screen.getByText("Recommended (20)")

    //clicking the acordian header
    fireEvent.click(accordianHeader)

    const addBtns = screen.getAllByRole('button', { name: 'ADD' })

    fireEvent.click(addBtns[2])

    expect(screen.getAllByTestId('foodItems').length).toBe(21)            //Since the cart component is rendering the same itemList to update the added cart, itemlist will add one more cart when we click add

    fireEvent.click(addBtns[5])

    expect(screen.getAllByTestId('foodItems').length).toBe(22)            

})