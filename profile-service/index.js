const express = require('express')
const {default: Axios} = require('axios')
const docs = require('./docs/openapi.json')
const swaggerUI = require('swagger-ui-express')

const app = express()

app.use(express.json())
app.use('/docs/swagger', swaggerUI.serve, swaggerUI.setup(docs))

app.get('/profile', async (req, res, next) => {
    const userId = 1
    let orders = []

    try {
        const ordersRes = await Axios.get(`http://localhost:3001/orders/${userId}`)

        orders = ordersRes.data.data
    } catch (error) {
        if (error.response.data) {
            if (error.response.data.data) {
                orders = error.response.data.data
            } else {
                console.log(error.response.data)
            }
        } else {
            console.log(error)
        }
    }

    return res.status(200).json({
        message: 'success get profile',
        data: {
            user_id: userId,
            first_name: 'Saefulloh',
            last_name: 'Maslul',
            email: 'smaslul@binaracademy.org',
            orders
        }
    })
})

app.listen(3000, () => console.log('service profile running'))

// app.sendTopic('CREATE_TRANSACTION', {data order})