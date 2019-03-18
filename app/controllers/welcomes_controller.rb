class WelcomesController < ApplicationController

  def index
    # @words = Word.select("times").group("times").order(times: :asc)
    # Order.select("store_name, sum(sales)").group("store")
    @last_word = Word.all.order(created_at: :asc).last
    @this_week_words = Word.where('created_at >= ?', @last_word.created_at - 7.days).order(id: :desc)
    @before_words = Word.where('created_at < ?', @last_word.created_at - 7.days).order(id: :desc)
    @marked_words = Word.where(is_mark: true)
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
