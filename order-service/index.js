const express = require('express')

const app = express()

app.use(express.json())

app.get('/orders/:user_id', (req, res, next) => {
    try {
        return res.status(200).json({
            message: 'success get orders',
            data: [
                {
                    order_no: 'ORDX173A',
                    items: [
                        {
                            item_id: 1,
                            name: 'Sabun Cuci Piring',
                            sku: '64568836',
                            qty: 5
                        },
                        {
                            item_id: 2,
                            name: 'Sikat Gigi Sensoden',
                            sku: '64568837',
                            qty: 2
                        },
                    ]
                },
                {
                    order_no: 'ORDX183A',
                    items: [
                        {
                            item_id: 1,
                            name: 'Sabun Cuci Piring',
                            sku: '64568836',
                            qty: 3
                        }
                    ]
                }
            ]
        })
    } catch (error) {
        return res.status(404).json({
            message: 'order not found',
            data: []
        })
    }
})

app.listen(3001, () => console.log('service order running'))

app.listen('CREATE_TRANSACTION', () => {
    // logicnya akan create transaction
})