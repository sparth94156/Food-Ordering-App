import Body from '../Body'
import { fireEvent, render } from '@testing-library/react'
import MOCK_DATA from '../mockData/resListMockData.json' 
import { act } from 'react' 
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

// Making a mock fetch method
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the body component with search button", async () => {

    await act(async () => render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    )

    const searchBtn = screen.getByRole("button", {name : 'Search'})

    expect(searchBtn).toBeInTheDocument();
})

it("should search reslist for given test Input ", async () => {

    // Since act function returns a promise we have to make the function async
    await act(async () => render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>)
        )
        // All the restaurant cards have their testid so we'll get all the restaurant cards with testId 
        const cardsBeforeSearch = screen.getAllByTestId('ResCard');
                
        expect(cardsBeforeSearch.length).toBe(20)

        // Querying the input field and search btn
        const searchInput = screen.getByTestId('searchInput');

        const searchBtn = screen.getByTestId('searchBtn');
        
        // console.log(searchBtn);

        // Firing the event to the elements
        fireEvent.change(searchInput, { target : {  value: "chicago pizza" }})
        
        fireEvent.click(searchBtn);

        const cardsAfterSearch = screen.getAllByTestId('ResCard')

        expect(cardsAfterSearch.length).toBe(1)
})

it("should search the top rated restaurants", async () => {

    await act(async () => render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ))
   
    const searchBtn = screen.getByRole("button", {name: "Top Ratings"});

    fireEvent.click(searchBtn)

    const resCardAfterFilter = screen.getAllByTestId('ResCard')

    expect(resCardAfterFilter.length).toBe(18)
})