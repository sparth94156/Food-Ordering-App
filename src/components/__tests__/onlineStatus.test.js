import Header from "../Header"
import { screen, render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

it("should check the online status of our app", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)

    // Making our app online
    fireEvent.online(screen.getByTestId('onlineStatus'))

    // console.log(screen.getByTestId('onlineStatus'))

    expect(screen.getByTestId('onlineStatus')).toBeInTheDocument()

    //  Making our app offline
    fireEvent.offline(screen.getByTestId('onlineStatus'))

    // You can write regex over here so u wont have to give testid to the element
    expect(screen.getByText(/Online Status/)).toBeInTheDocument()


    

})