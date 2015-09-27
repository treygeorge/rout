class LeadMailer < ApplicationMailer
    default from: 'leads@therout.com'

    def lead_email(name, model, email)
        @name = name
        @model = model
        @email = email
        mail(to: 'treygeorge+routleads@gmail.com', subject: 'therout lead')
    end
end
