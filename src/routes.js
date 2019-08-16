'use strict'

/**
 * Test API Routes
 */
import { Router } from 'express'

export const router = Router()

router.get('', (req, res) => {
  res.send('Hello from express-starter kit')
})
