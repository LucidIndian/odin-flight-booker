class PassengerMailer < ApplicationMailer

  default from: 'notifications@toptesting.com'

  def confirmation_email
    @booking = params[:booking]
    # Create an array of emails to send 1 message per passenger
    @allpassemails = @booking.passengers.map { |pass| pass.email }  
    @url = 'https://example.com/login'
    
    mail( to: @allpassemails,
      subject: 'Your Odin Test Flight is Booked!',
      booking: @booking)
  end

end
