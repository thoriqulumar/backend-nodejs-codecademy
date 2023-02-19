/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
          },
        name: {
            type: 'TEXT',
            notNull: true,
        },
        job: {
            type: 'TEXT',
            notNull: true,
        },
        created_at: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
          },
      })
};

exports.down = pgm => {
    pgm.dropTable('users');
};
