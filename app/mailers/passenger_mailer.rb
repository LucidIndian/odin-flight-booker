class PassengerMailer < ApplicationMailer

  default from: 'notifications@toptesting.com'

  def confirmation_email
    @url = 'https://example.com/login'
    @booking = params[:booking]
    # Create an array to send 1 email per passenger
    @allpassemails = @booking.passengers.map { |pass| pass.email }  
    mail( to: @allpassemails,
      subject: 'Your Odin Test Flight is Booked',
      booking:  @booking )
  end

end
