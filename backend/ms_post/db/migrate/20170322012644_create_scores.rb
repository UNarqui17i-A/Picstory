class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.references :post, foreign_key: true
      t.string :user_id
      t.integer :scored

      t.timestamps
    end
  end
end
