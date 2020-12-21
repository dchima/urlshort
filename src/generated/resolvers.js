import UrlController from '../controllers/urlController';
import urlController from '../controllers/urlController';

const {
  addUrl,
} = UrlController;

const resolvers = {
  Mutation: {
    addUrl,
  },
};
module.exports = resolvers;
