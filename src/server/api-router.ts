import express from 'express';
import cors from 'cors';

import { connectClient } from './db';

const router = express.Router();
router.use(cors());

router.get("/advisors", async (req, res) => {
  const client = await connectClient();

  const advisors = await client.collection('advisors')
    .find()
    .project({
      id: 1,
      name: 1,
      isOnline: 1,
      language: 1,
      reviewNumber: 1,
    })
    .toArray();

  res.send({ advisors });
});

export default router;
