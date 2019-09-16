include Helpers::QueryHelper

Types::QueryType = GraphQL::ObjectType.define do

  # Add root-level fields here.
  # They will be entry points for queries on your schema.
  name 'Query'
  description "屏仕建設 GraphQL API"

  field :users, function: Resolvers::UsersSearch do 
    description "使用者"
  end
end
