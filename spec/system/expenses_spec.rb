require 'rails_helper'

RSpec.describe "Expenses", type: :system do
    before do
      @user = FactoryBot.create(:user)
      @expense = FactoryBot.build(:expense)
      @expenseId = FactoryBot.create(:expense)
    end
    context '家計簿の登録ができるとき'do
      it 'ログインしたユーザーは家計簿が登録できる' do
        # ログインする
        visit new_user_session_path
        fill_in 'user[email]', with: @user.email
        fill_in 'user[password]', with: @user.password
        find('input[name="commit"]').click
        expect(current_path).to eq root_path
        # マイページへのリンクがあることを確認する
        expect(page).to have_content('マイページ')
        # マイページに移動する
        visit "/expenses/#{@user.id}"
        # フォームに情報を入力する
        fill_in 'expense[day]', with: @expense.day
        select "朝食", from: "expense[category_id_1]"
        fill_in 'expense[name_1]', with: @expense.name_1
        fill_in 'expense[price_1]', with: @expense.price_1
        # 送信するとExpenseモデルのカウントが1上がることを確認する
        expect {
        find('input[name="submit"]').click
        expect(page.driver.browser.switch_to.alert.text).to eq "登録しますか？"
        page.driver.browser.switch_to.alert.accept
        visit "/expenses/#{@user.id}"
        }.to change { Expense.count }.by(1)
        # マイページには先ほど登録した家計簿が存在することを確認する
        expect(page).to have_content(@expense.day.strftime('%m月%d日'))
        expect(page).to have_content(@expense.name_1)
        expect(page).to have_content(@expense.price_1)
      end
    end
    context '家計簿の登録ができないとき'do
      it 'ログインしていないとマイページに遷移できない' do
        # トップページに遷移する
        visit root_path
        # マイページへのボタンがない
        expect(page).to have_no_content("マイページ")
      end
    end
end

RSpec.describe '削除', type: :system do
  before do
    @expense = FactoryBot.create(:expense)
  end
  context '登録した家計簿が削除ができるとき' do
    it 'ログインしたユーザーは自らが投稿したツイートの削除ができる' do
      # ログインする
      visit new_user_session_path
      fill_in 'user[email]', with: @expense.user.email
      fill_in 'user[password]', with: @expense.user.password
      find('input[name="commit"]').click
      expect(current_path).to eq root_path
      # マイページへのリンクがあることを確認する
      expect(page).to have_content('マイページ')
      # マイページに移動する
      visit "/expenses/#{@expense.user.id}"
      # 登録した家計簿に「削」ボタンがあることを確認する
      expect(page).to have_content('消')
      # 家計簿を削除するとレコードの数が1減ることを確認する
      expect{
      find('a[name="del"]' ).click
      expect(page.driver.browser.switch_to.alert.text).to eq "削除しますか？"
      page.driver.browser.switch_to.alert.accept
      visit "/expenses/#{@expense.user.id}"
      }.to change { Expense.count }.by(-1)
     # マイページには先ほど登録した家計簿が存在することを確認する
     expect(page).to have_no_content(@expense.day.strftime('%m月%d日'))
     expect(page).to have_no_content(@expense.name_1)
     expect(page).to have_no_content(@expense.price_1)
    end
  end
end