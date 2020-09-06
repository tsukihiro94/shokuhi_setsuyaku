require 'rails_helper'

RSpec.describe Post, type: :model do
  before do
    @post = FactoryBot.build(:post)
  end

  describe '節約術の投稿' do
    context '投稿がうまく保存できたとき' do
      it "全ての項目が正しく入力したら登録できる" do
        expect(@post).to be_valid
      end
    end

    context '投稿が失敗したとき' do
      it "textが空だと登録できない" do
        @post.text = nil
        @post.valid?
        expect(@post.errors.full_messages).to include("Text can't be blank")
      end
    end
  end
end
