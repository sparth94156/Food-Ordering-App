import LoginForm from "../loginForm"
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"

it("should render the login component", () => {

    render(<LoginForm/>)
    expect(screen.getByTestId('form')).toBeInTheDocument()
})

