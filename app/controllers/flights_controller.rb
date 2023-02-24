class FlightsController < ApplicationController

  def index
    @airports = Airport.all
    @flights = Flight.all
    @searched_flights = Flight.user_search(query_params)
    @num_of_passengers = query_params[:passengers_num]
    @unique_flight_days = @flights.map{ |flight| [ flight.start.day ] }.uniq
    @day_options = @flights.map{ |flight| [ flight.start.day, flight.start] }.uniq
    
    # @start_flight_days = Time.now
    # @end_flight_days = Time.now + 5.days

  end

  private

    # Only allow a list of trusted parameters through.
    def query_params
      params.permit(:departure_id, :arrival_id, :start, :passengers_num, :commit)
    end

end
