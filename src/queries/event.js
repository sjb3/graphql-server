// const { GraphQLID, GraphQLNonNull } = require('graphql');
// const EventType = require('../types/event');

// module.exports = {
//   type: EventType,
//   args: {
//     id: {
//       name: 'id',
//       type: new GraphQLNonNull(GraphQLID),
//     },
//   },
//   resolve: (root, args) => {
//     return new Promise( (resolve, reject) => {
//       resolve({
//         id: '12345',
//         name: 'Launch Party',
//         date: 'Today',
//       })
//     })
//   }
// };

const { GraphQLID, GraphQLNonNull } = require('graphql');
const EventType = require('../types/event');

module.exports = {
  type: EventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (root, args) => new Promise((resolve, reject) => {
    resolve({
      id: '1234',
      name: 'Launch Party',
      date: 'Today',
    });
  }),

};
