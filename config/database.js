module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "postgres"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", env("DB_NAME")),
        username: env("DATABASE_USERNAME", env("DB_USER")),
        password: env("DATABASE_PASSWORD", env("DB_PASS")),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
