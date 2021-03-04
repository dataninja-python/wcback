const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'lallah.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'tvdbemhj',
    password: env.DB_PASSWORD || 'URA8ZzKPnoEsnvYkWCqTg8CJ4-CoD3E4',
    database: env.DB_NAME || 'tvdbemhj',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;