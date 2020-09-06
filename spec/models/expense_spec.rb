require 'rails_helper'

RSpec.describe Expense, type: :model do
  before do
    @expense = FactoryBot.build(:expense)
  end

  describe '家計簿登録' do
    context '家計簿がうまく登録できたとき' do
      it "全ての項目が正しく入力したら登録できる" do
        expect(@expense).to be_valid
      end
    end

    context '家計簿の登録が失敗したとき' do
      it "日にちが空だと登録できない" do
        @expense.day = ""
        @expense.valid?
        expect(@expense.errors.full_messages).to include("Day can't be blank")
      end
    end

  end
end
