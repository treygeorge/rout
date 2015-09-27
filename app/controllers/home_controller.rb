class HomeController < ApplicationController
    def index
        
    end

    def lead
        LeadMailer.lead_email(params[:name], params[:model], params[:email]).deliver_now
        render :nothing => true, :status => :no_content
    end
end
