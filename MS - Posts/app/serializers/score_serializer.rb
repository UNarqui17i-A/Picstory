class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :score

  belongs_to :image
end
