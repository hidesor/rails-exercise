class Admin::WordsController < ApplicationController
  before_action :set_word, only: [:show, :edit, :update, :destroy]

  def index
    @words = Word.order(times: :asc).paginate :page => params[:page], :per_page => 10
    # House.get_house
  end

  def show
  end

  def new
    @word = Word.new
  end

  def edit
  end

  def create
    @word = Word.new(word_params)

    respond_to do |format|
      if @word.save
        format.html { redirect_to admin_words_path, notice: '資料建立成功' }
      else
        format.html { render :new }
      end
    end
  end

  def update
    respond_to do |format|
      if @word.update(word_params)
        # 上傳圖片
        if params[:files].present? 
          params[:files].each do |file|
            img_attachment = {
              filename: file.original_filename,
              type: file.content_type,
              headers: file.headers,
              tempfile: file.tempfile
            }

            file_attachment = Attachment.new
            file_attachment.attachment = ActionDispatch::Http::UploadedFile.new(img_attachment)
            file_attachment.attachable_id = @word.id
            file_attachment.attachable_type = 'Word'
            file_attachment.save
          end
        end

        format.html { redirect_to edit_admin_word_path(@word), notice: '資料更新成功' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @word.destroy
    respond_to do |format|
      format.html { redirect_to admin_words_path, notice: '資料刪除成功' }
      format.json { head :no_content }
    end
  end

  private
    def set_word
      @word = Word.find(params[:id])
    end

    def word_params
      params.require(:word).permit(:name, :content, :times)
    end
end
