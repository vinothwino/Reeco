import { http, HttpResponse } from 'msw'

export const handlers = [
    // Describe what request to intercept...
    http.get('/api/v1/orders/*', async () => {
        // ...and how to respond to it.
        // await new Promise((res) => setTimeout(res, 3000));
        return HttpResponse.json({
            data: [{ name: 'test' }]
        })
    }),
]