/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('envelopes', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
          },
        user_id: {
          type: 'VARCHAR(50)',
        },
        title: {
            type: 'TEXT',
            notNull: true,
        },
        budget: {
            type: 'INT',
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
    pgm.dropTable('envelopes');
};
