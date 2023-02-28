class AddStartDateToFlights < ActiveRecord::Migration[7.0]
  def change
    add_column :flights, :start_date, :date
    add_column :flights, :start_time, :time
    remove_column :flights, :start
  end
end
