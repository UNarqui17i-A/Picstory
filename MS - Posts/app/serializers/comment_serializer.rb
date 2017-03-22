class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comment

  belongs_to :image
end
