class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :user_id
      t.string :title
      t.string :image_url
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
