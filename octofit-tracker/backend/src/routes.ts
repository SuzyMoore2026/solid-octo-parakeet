import { Router, Request, Response } from 'express';
import { User } from './models/user';
import { Team } from './models/team';
import { Activity } from './models/activity';
import { Leaderboard } from './models/leaderboard';
import { Workout } from './models/workout';

const router = Router();

router.get('/users/', async (_req: Request, res: Response) => {
  const users = await User.find({}).lean();
  res.json({ resource: 'users', count: users.length, data: users });
});

router.get('/teams/', async (_req: Request, res: Response) => {
  const teams = await Team.find({}).lean();
  res.json({ resource: 'teams', count: teams.length, data: teams });
});

router.get('/activities/', async (_req: Request, res: Response) => {
  const activities = await Activity.find({}).lean();
  res.json({ resource: 'activities', count: activities.length, data: activities });
});

router.get('/leaderboard/', async (_req: Request, res: Response) => {
  const leaderboard = await Leaderboard.find({}).lean();
  res.json({ resource: 'leaderboard', count: leaderboard.length, data: leaderboard });
});

router.get('/workouts/', async (_req: Request, res: Response) => {
  const workouts = await Workout.find({}).lean();
  res.json({ resource: 'workouts', count: workouts.length, data: workouts });
});

export default router;
