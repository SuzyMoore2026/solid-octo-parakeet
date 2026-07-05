import mongoose from 'mongoose';
import { User } from '../models/user';
import { Team } from '../models/team';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Workout } from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Ava Chen',
        email: 'ava@example.com',
        fitnessGoal: 'Build endurance',
        experienceLevel: 'Intermediate',
      },
      {
        name: 'Marcus Reed',
        email: 'marcus@example.com',
        fitnessGoal: 'Lose weight',
        experienceLevel: 'Beginner',
      },
    ]);

    await Team.insertMany([
      {
        name: 'River Runners',
        captain: users[0].name,
        members: users.map((user) => user.name),
        focus: 'Cardio endurance',
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id.toString(),
        type: 'Run',
        durationMinutes: 35,
        caloriesBurned: 420,
        date: new Date('2026-07-05T06:00:00.000Z'),
      },
      {
        userId: users[1]._id.toString(),
        type: 'Cycling',
        durationMinutes: 45,
        caloriesBurned: 390,
        date: new Date('2026-07-04T18:30:00.000Z'),
      },
    ]);

    await Leaderboard.insertMany([
      {
        userId: users[0]._id.toString(),
        name: users[0].name,
        points: 180,
        streak: 7,
      },
      {
        userId: users[1]._id.toString(),
        name: users[1].name,
        points: 145,
        streak: 3,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Tempo Intervals',
        difficulty: 'Intermediate',
        durationMinutes: 30,
        focus: 'Cardio',
      },
      {
        title: 'Core Strength Flow',
        difficulty: 'Beginner',
        durationMinutes: 20,
        focus: 'Core',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
