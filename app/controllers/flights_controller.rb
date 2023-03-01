class FlightsController < ApplicationController

  def index
    @airports = Airport.all
    @flights = Flight.all
    @num_of_passengers = params[:passengers_num]
    # @searched_flights_testa = Flight.user_search(query_params)
    @searched_flights = Flight.where(departure_id: params[:departure_id],
    arrival_id: params[:arrival_id], start_date: params[:start_date])
  end

  private

    # Only allow a list of trusted parameters through.
    # I don't think this is being used, why not? Do I need to call `query_params` above?
    def query_params
      params.permit(:departure_id, :arrival_id, :start_date, :start_time, :passengers_num, :commit)
      puts "query_params method ran"
    end

end
