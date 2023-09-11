import {render, screen} from "@testing-library/react";
import IndexPage from "dh-marvel/pages/index.page";
import Index from "dh-marvel/pages/index.page";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index total={0} initialComics = {[]} page = {1}/>)
            const title = screen.getByText('Bienvenido a DH-Marvel Store')
            expect(title).toBeInTheDocument()
        })
    })

})