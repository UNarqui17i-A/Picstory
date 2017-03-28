class Image < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :scores, dependent: :destroy
end
