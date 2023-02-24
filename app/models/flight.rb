class Flight < ApplicationRecord

  belongs_to :departure_airport, class_name: 'Airport', foreign_key: :departure_id, inverse_of: :departing_flights
  belongs_to :arrival_airport, class_name: 'Airport', foreign_key: :arrival_id, inverse_of: :arriving_flights
      
  
  # def self.user_search(query_params)
  #     where(departure_id: query_params[:departure_id],
  #       arrival_id: query_params[:arrival_id])
  #       # start: query_params[:start])
  #     puts "user_search method ran"
  # end



end
