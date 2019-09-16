require "apollo/tracing"

class Schema < GraphQL::Schema
  query Types::QueryType
  mutation Mutations::MutationType

  use BatchLoader::GraphQL
  # use ApolloTracing.new
end
