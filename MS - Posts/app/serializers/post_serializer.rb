class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :image_url, :latitude, :longitude, :created_at
  has_many :comments
  has_many :scores
end
