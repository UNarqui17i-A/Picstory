class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :scored, :created_at, :updated_at
end
