/** @type { import {"drizzle-kit"}.Config } */

export default {
  dialect: "postgresql",
  schema: "./configs/schema.js",

  dbCredentials: {
    url: 'postgresql://neondb_owner:skRqP36EwFtG@ep-sparkling-star-a15kovj3.ap-southeast-1.aws.neon.tech/car-marketplace?sslmode=require',
  }
};
