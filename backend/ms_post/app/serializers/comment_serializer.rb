class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :commented

  belongs_to :post
end
