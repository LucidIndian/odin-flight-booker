class Passenger < ApplicationRecord
  # has_many :bookings
  # has_many :flights, through: :bookings
  belongs_to :booking
  has_many :flights, through: :booking
end
