include Helpers::TypeHelper 

Types::UserType = GraphQL::ObjectType.define do
  name 'User'
  description User.model_name.human

  define_fields(User)

  field :reservations, types[Types::ReservationType], I18n.t('labels.user.reservations') do 
    define_pagination_arguments

    resolve -> (obj, args, ctx) {
      has_one_or_many(obj, args, ctx, "id", "reservation", "user_id")
    }
  end
end
