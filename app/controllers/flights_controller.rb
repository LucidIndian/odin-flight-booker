class FlightsController < ApplicationController

  def index
    @airports = Airport.all
    @flights = Flight.all
    # datetime.to_fs(:rfc822)        # => "Tue, 04 Dec 2007 00:00:00 +0000"
    @start_options = @flights.map{ |f| [ f.start.to_fs(:rfc822), f.start ] }.uniq
  
  end

end
