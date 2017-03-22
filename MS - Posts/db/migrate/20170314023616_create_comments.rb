class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.references :image, foreign_key: true
      t.string :user_id
      t.string :comment

      t.timestamps
    end
  end
end
