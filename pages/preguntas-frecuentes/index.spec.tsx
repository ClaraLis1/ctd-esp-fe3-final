import {render, screen} from "@testing-library/react";
import Index from "dh-marvel/pages/preguntas-frecuentes/index.page"

describe('FaqsPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index faqs={[]}/>)
            const title = screen.getByText('Preguntas Frecuentes')
            expect(title).toBeInTheDocument()
        })
    })

})