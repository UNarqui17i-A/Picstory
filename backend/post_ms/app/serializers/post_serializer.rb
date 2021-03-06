class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :image_url, :total_score, :total_comment, :latitude, :longitude, :created_at, :updated_at
  has_many :comments
  has_many :scores
end
