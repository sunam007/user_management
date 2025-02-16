import User from "../models/User.js";

export const seedUsers = async () => {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      city: "New York",
      state: "NY",
      country: "USA",
      image_url: "https://picsum.photos/200",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password456",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      image_url: "https://picsum.photos/200",
    },
  ];

  try {
    await User.deleteMany({}); // Clear existing users
    await User.insertMany(users);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
