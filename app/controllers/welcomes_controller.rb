class WelcomesController < ApplicationController

  def index
    @words = Word.select("times").group("times").order(times: :asc)
    # Order.select("store_name, sum(sales)").group("store")
  end

  def word
    @words = Word.where(times: params[:times]).order(name: :asc)
  end

  def something
    respond_to do |format|
      format.html {
        render :text => "<h3>AWESOME!!! #{Time.now}</h3>"
      }
      format.js  # something.js.erb
      format.json {
        render :json => { :foobar => Time.now }
      }
    end

  end

end
