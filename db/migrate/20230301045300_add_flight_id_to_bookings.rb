class AddFlightIdToBookings < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :flight_id, :string
  end
end