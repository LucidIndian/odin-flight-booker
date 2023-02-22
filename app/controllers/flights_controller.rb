class FlightsController < ApplicationController

  def index
    @airports = Airport.all
    @flights = Flight.all
    @day_options = @flights.map{ |flight| [ flight.start.day ] }.uniq
    
  end

end
