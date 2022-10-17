import express from 'express'
import statistics from '../controllers/statistics'

const router = express.Router()

router.post('localhost:5000/api/statistics', statistics.stats);

export default router;