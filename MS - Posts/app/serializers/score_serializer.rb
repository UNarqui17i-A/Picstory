class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :scored

  belongs_to :post
end
