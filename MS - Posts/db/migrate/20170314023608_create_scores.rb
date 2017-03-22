class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.references :image, foreign_key: true
      t.string :user_id
      t.integer :score

      t.timestamps
    end
  end
end
