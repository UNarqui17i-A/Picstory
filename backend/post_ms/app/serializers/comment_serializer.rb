class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :commented, :created_at, :updated_at
end
