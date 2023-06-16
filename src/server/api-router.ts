import express from 'express';
import cors from 'cors';

import { connectClient } from './db';

const router = express.Router();
router.use(cors());

router.get("/advisors", async (req, res) => {
  const client = await connectClient();

  const advisors = await client.collection('contests')
    .find()
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
    })
    .toArray();

  res.send({ advisors });
});

router.get("/advisor/:advisorId", async (req, res) => {
  const client = await connectClient();

  const contest = await client
    .collection("contests")
    .findOne({ id: req.params.advisorId });

  res.send({ contest });
});

export default router;
