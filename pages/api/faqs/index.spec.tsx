/*import {createMocks} from 'node-mocks-http';
import handler from "dh-marvel/pages/api/faqs/index.route"


describe('faqs', () => {
    describe('when sending a valid POST, customer and card data', () => {
        it('should return a 400 error', async () => {
            const order = {address: {}, card: {number: validCard }} as CheckoutInput
            const {req, res} = createMocks({
                method: 'POST',
                body: order
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(200)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining({data: order}),
            );
        })
    })
   describe('when sending a non POST request', () => {
        it('should return a 405 error', async () => {
            const {req, res} = createMocks({
                method: 'GET',
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(405)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_METHOD_NOT_ALLOWED),
            );
        })
    })
    describe('when sending an invalid address', () => {
        it('should return a 400 error', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {address: {address2: invalidAddress}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_INCORRECT_ADDRESS),
            );
        })
    })
    describe('when sending an invalid form', () => {
        it('should return a 500 error', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(500)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_SERVER),
            );
        })
    })
    describe('when sending a card without funds', () => {
        it('should return a 400 error', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {address: {}, card: {number: withoutFundsCard}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_CARD_WITHOUT_FUNDS),
            );
        })
    })
    describe('when sending a card without authorization', () => {
        it('should return a 400 error', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {address: {}, card: {number: withoutAuthorizationCard}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_CARD_WITHOUT_AUTHORIZATION),
            );
        })
    })
    describe('when sending a card with invalid data', () => {
        it('should return a 400 error', async () => {
            const {req, res} = createMocks({
                method: 'POST',
                body: {address: {}, card: {number: '4111'}} as CheckoutInput
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(400)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining(ERROR_CARD_DATA_INCORRECT),
            );
        })
    })
})*/