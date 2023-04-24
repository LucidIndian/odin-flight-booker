class PassengerMailer < ApplicationMailer

  default from: 'notifications@toptesting.com'

  default to: -> { Booking.passengers.pluck(:email) }
  # from: 'notification@example.com'

  def confirmation_email
    @passengers = params[:passengers]
    @booking = params[:booking]
    @url = 'https://example.com/login'
    mail(to: 'tyght@tie.com', 
      subject: 'Your Odin Test Flight is Booked',
      booking:  @booking)
  end

end
