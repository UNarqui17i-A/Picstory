class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :user_id
      t.string :title
      t.string :url
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
