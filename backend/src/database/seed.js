const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');
const Profile = require('../models/Profile');
const SocialLink = require('../models/SocialLink');
const Analytics = require('../models/Analytics');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany();
    await Profile.deleteMany();
    await SocialLink.deleteMany();
    await Analytics.deleteMany();

    // Create seed user
    const user = await User.create({
      username: 'johndoe',
      email: 'john@example.com',
      password: 'password123'
    });

    const profile = await Profile.create({
      userId: user._id,
      displayName: 'John Doe',
      bio: 'Software Engineer & Creator | Building cool web apps 🚀',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
      theme: 'default',
      isPublished: true
    });

    await SocialLink.insertMany([
      {
        profileId: profile._id,
        title: 'Personal Portfolio',
        platform: 'website',
        url: 'https://example.com',
        order: 0,
        clickCount: 42
      },
      {
        profileId: profile._id,
        title: 'GitHub Profile',
        platform: 'github',
        url: 'https://github.com',
        order: 1,
        clickCount: 128
      },
      {
        profileId: profile._id,
        title: 'Twitter / X',
        platform: 'twitter',
        url: 'https://twitter.com',
        order: 2,
        clickCount: 85
      }
    ]);

    await Analytics.create({
      profileId: profile._id,
      totalVisits: 350,
      totalClicks: 255,
      uniqueVisitors: 290
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData();
