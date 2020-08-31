![readme](https://user-images.githubusercontent.com/68362725/91681205-9f5d6880-eb88-11ea-8ea3-f0d763c71195.png)
# アプリケーション名
 カンタン食費節約家計簿アプリ

※※※
#アプリケーション概要
 食費は、20〜30代女性の１ヶ月の平均出費額の割合で家賃につづき大部分を占めています。
 そこで、貯金を目的として家計簿をつけた経験はあるものの、実際に貯金までできなかった、
 どの食費を節約できるかイマイチ分からないという結果で終わった割合は、約６割と言われています。
 このアプリでは、直感的に家計簿を簡単に付けることができます。
 更に、食費に特化した家計簿なので1日の予算が達成出来なかった時は、どの食費を節約したら予算達成出来たか教えてくれる機能もあります。
 そして、従来の家計簿アプリには無かったSNS機能をつけることで楽しく節約ができ、毎日使いたくなる家計簿アプリになっています。


※※※
#url
 

***
#テスト用アカウント
 email:    peko@pigu
 password: ht0000

※※※
#利用方法
 ①新規登録→ログイン
 ②マイページにて家計簿つける
 ③日別で予算達成したか判定する
 ④節約術投稿一覧ページで投稿を見たり、投稿をしたりする

***
#目指した課題解決
・節約をしたくて家計簿をつけたがイマイチ節約まで出来ていない
・まず、食費の中で何が節約できるか分からない
 などの課題を解決することを目指しました。

***
#洗い出した要件
 | 実装したい機能 | トップページ |
----|---- 
| 機能 |[ボタン]<br>サインイン/ログインページへ遷移できるボタンがある<br>ログイン時は、ログアウトできるボタンがある<br>節約術を投稿できるページへ遷移するボタンがある<br>投稿するボタンがある<br>投稿一覧/使い方動画までスクロールしてくれるボタンがある<br>投稿を削除できるボタンがある<br>投稿をページネーションしたボタンがある<br>[表示]<br>ログインユーザー名を見ることができる<br>アプリの使い方の動画を見ることができる<br>共有された投稿を一覧で見ることができる|

 | 実装したい機能 | マイページ |
----|---- 
| 機能 |[ボタン]<br>トップページへ戻るボタンがある<br>家計簿の詳細を追加するボタンがある<br>家計簿の詳細を削除するボタンがある<br>登録した家計簿を削除するボタンがある<br>ユーザー登録を編集するページへ遷移するボタンがある<br>登録した家計簿を日別で表示するボタンがある<br>[表示]<br>ユーザー名を見ることができる<br>ユーザーの月次目標食費額を見ることができる<br>登録された家計簿を見ることができる|

| 実装したい機能 | 日別判定ページ |
----|---- 
| 機能 |[ボタン]<br>マイページへ戻るボタンがある<br>節約術一覧のページへ遷移するボタンがある<br>登録した家計簿を日別で表示するボタンがある<br>[表示]<br>ユーザー名を見ることができる<br>ユーザーの月次目標食費額を見ることができる<br>登録された家計簿を見ることができる|

| 実装したい機能 | 投稿ページ |
----|---- 
| 機能 |[ボタン]<br>投稿するボタンがある<br>投稿ページを消すボタンがある<br>[表示]<br>入力した文字のカウントを見ることができる<br>投稿フォームを見ることができる|

| 実装したい機能 | 新規登録/ログイン/ユーザー登録編集ページ |
----|---- 
| 機能 |[ボタン]<br>登録/ログイン/編集ボタンがある<br>[表示]<br>入力フォームを見ることができる|

***
#実装した機能についての説明動画
<iframe width="560" height="315" src="https://www.youtube.com/embed/O_h7D8J73ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

***
#データベース設計
<img width="462" alt="7c03dc2368894819c0d013d4013b8bb6" src="https://user-images.githubusercontent.com/68362725/91681257-d895d880-eb88-11ea-9a99-1060f26fd824.png">

***
#ローカルでの動作方法
①git clone <コピーしたurl >
②bundle install
③rails db:create
④rails db:migrate
⑤rails s

ruby 2.6.5p114 
Rails 6.0.3.2
