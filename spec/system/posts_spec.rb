require 'rails_helper'

RSpec.describe "Posts", type: :system do
  before do
    @user = FactoryBot.create(:user)
    @post = FactoryBot.build(:post)
  end
  context '節約術の投稿ができるとき'do
    it 'ログインしたユーザーは新規投稿できる' do
      # ログインする
      visit new_user_session_path
      fill_in 'user[email]', with: @user.email
      fill_in 'user[password]', with: @user.password
      find('input[name="commit"]').click
      expect(current_path).to eq root_path
      # 新規投稿のボタンがあることを確認する
      expect(page).to have_selector("img[src$='/assets/toukou-6ab6b5dcdd98b539058d9af424e385ebbeeef3b22b526ae833f28e9d85d63a95.png']")
      # 新規投稿のボタンをクリックする
      find('img[name="toukou"]').click
      # フォームに情報を入力する
      fill_in 'post[text]', with: @post.text
      # 送信するとPostモデルのカウントが1上がることを確認する
      expect{
      find('input[name="commit"]').click
      }.to change { Post.count }.by(1)
      # トップページに遷移する
      visit root_path
      # トップページには先ほど投稿した内容のツイートが存在することを確認する（テキスト）
      expect(page).to have_content(@post.text)
    end
  end
  context '節約術の投稿ができないとき'do
    it 'ログインしていないと新規投稿ページに遷移できない' do
      # トップページに遷移する
      visit root_path
      # 新規投稿へのボタンがない
      expect(page).to have_no_selector("img[src$='/assets/toukou-6ab6b5dcdd98b539058d9af424e385ebbeeef3b22b526ae833f28e9d85d63a95.png']")
    end
  end
end