class ImageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :url, :latitude, :longitude, :created_at
  has_many :comments
  has_many :scores
end
