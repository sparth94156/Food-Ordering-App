import { render, screen } from "@testing-library/react"
import RestaurantCart from "../RestaurantCart"
import MOCK_DATA from '../mockData/restaurantcartData.json'
import { withDiscountLabel } from "../RestaurantCart"
import "@testing-library/jest-dom"

it("should render the Restaurant Card", () => {

    // This is how we pass in props for testing
    render(<RestaurantCart resObj={MOCK_DATA}/>)

    // Query the element that matches the name
    const restaurantName = screen.getByText("Pizza Hut")

    // Assertion
    expect(restaurantName).toBeInTheDocument();
})

it("should render the Restaurant Cart component with the opened label",() => {

    const DiscountedCart = withDiscountLabel(RestaurantCart)

     render(<DiscountedCart resObj={MOCK_DATA} />)

     const isOpen = screen.getByText('Opened');

     expect(isOpen).toBeInTheDocument();
})

