const typeDefs = `const typeDefs = \`
  type Todo {
    id: String
    message: String!
  }

  type Query {
    todo(id: String!): Todo
  }
\`;`;

const resolvers = `export const resolvers = {
  Image: { isLiked: () => false },
  Mutation: {
    toggleLikedPhoto: (_, { id }, { cache, getCacheKey }) => {
      const fragment = gql\`
        fragment isLiked on Image {
          isLiked
        }
      \`;
      const fragmentId = getCacheKey({ id, __typename: "Image" });
      const photo = cache.readFragment({ fragment, id: fragmentId });

      cache.writeData({
        id: fragmentId,
        data: { isLiked: !photo.isLiked }
      });

      return null;
    }
  }
};`;

const stateMutation = `const LIKE_PHOTO = gql\`
  mutation toggleLikedPhoto($id: String!) {
    toggleLikedPhoto(id: $id) @client
  }
\`;`;

const stateMutation2 = `export const DogWithLikes = ({ url, id }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {toggleLike => (
        <View>
          <Image source={url} />
          <Heart onPress={toggleLike} />
        </View>
      )}
    </Mutation>
  );
};`;

const boostWithState = `import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
  clientState: {
    resolvers,
    defaults,
    typeDefs,
  },
});
`;

const stateLink = `const stateLink = withClientState({
  cache,
  defaults: { visibilityFilter: 'SHOW_ALL' },
  resolvers: {
    Mutation: {
      visibilityFilter: (_, { filter }, { cache }) => {
        cache.writeData({
          data: { visibilityFilter: filter }
        });
        return null;
      },
    },
  },
});`;

const clientQuery = `const GET_DOG = gql\`
  query getDogByBreed($breed: String!) {
    dog(breed: $breed) {
      images {
        url
        id
        isLiked @client
      }
    }
  }
\`;`;

const oldSetup = `yarn add graphql graphql-tag apollo-client apollo-cache-inmemory apollo-link-http react-apollo`;

const newSetup = `yarn add graphql apollo-boost react-apollo`;

const requestFn = `import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: localStorage.getItem('token')
      }
    }));
  }
});`;

const boostSetup = `import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
});
`;

const dogQuery = `import { gql } from 'apollo-boost';

const GET_DOGS = gql\`
  {
    dogs {
      id
      breed
      displayImage
    }
  }
\`;`;

const dogs = `const Dogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return <Fetching />;
      if (error) return <Error />;

      return data.dogs.map(dog => (
        <Dog key={dog.id} {...dog} />
      ));
    }}
  </Query>
);
`;

const code = {
  setup: `import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://nx9zvp49q7.lp.gql.zone/graphql'
  }),
});`,
  typeDefs,
  stateLink,
  oldSetup,
  newSetup,
  boostSetup,
  resolvers,
  requestFn,
  dogs,
  dogQuery,
  clientQuery,
  boostWithState,
  stateMutation,
  stateMutation2,
};

export default code;
