![readme](https://user-images.githubusercontent.com/68362725/91681205-9f5d6880-eb88-11ea-8ea3-f0d763c71195.png)
# アプリケーション名
 カンタン食費節約家計簿アプリ


***
# 概要
 食費は、20〜30代女性の１ヶ月の平均出費額の割合で家賃につづき大部分を占めています。
 そこで、貯金を目的として家計簿をつけた経験はあるものの、実際に貯金までできなかった、
 どの食費を節約できるかイマイチ分からないというで結果で終わった人は多いと思います。
 （家計簿が続かなかった割合は、約６割と言われています。）
 このアプリでは、直感的に家計簿を簡単に付けることができます。
 更に、食費に特化した家計簿なので1日の予算が達成出来なかった日は、どの食費を我慢したら予算達成出来たか教えてくれる機能もあります。
 そして、従来の家計簿アプリには無かったSNS機能をつけることで楽しく節約ができ、毎日使いたくなる家計簿アプリになっています。

***
# url<br>
https://shokuhi-setsuyaku.herokuapp.com/

***
# テスト用アカウント<br>
 email: peko@pigu<br>
 password: ht0000<br>

***
# 利用方法<br>
 ①新規登録→ログイン<br>
 ②マイページにて家計簿つける<br>
 ③月別/日別で判定したい日を選び、予算達成したか判定ボタンを押す<br>
 ④節約術投稿一覧ページで投稿を見たり、投稿をしたりする

***
# 目指した課題解決
・節約をしたくて家計簿をつけたがイマイチ節約まで出来ていない<br>
・まず、食費の中で何が節約できるか分からないなどの課題を解決することを目指しました。

***
# 洗い出した要件
|機能|目的|ストーリー<br>(ユースケース)| 
| :----: | :----: | :----: | 
| ユーザー登録機能|ユーザー登録をしてマイページを持てるようにするため|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す|
|ユーザー情報編集機能|ニックネームと月次食費目標額が変更できるようにするため|マイページのヘッダーにある「目標予算を編集」のボタンを押す。入力フォームで変更したい箇所を入力し、最後に「変更」ボタンを押す|
|ログイン/ログアウト機能|ログインとログアウトができるようにするため|トップページのヘッダーにある「ログイン」ボタンを押し、入力フォームに従って登録したデータを入力し、最後に「ログイン」ボタンを押す。ログイン時は「ログアウト」ボタンを押すとログアウトできる| 
|節約術投稿/削除機能|節約術を投稿できたりする。削除機能は、自分の投稿のみ削除可能で、投稿した記事にカーソルを乗せると削除ボタンが現れる |投稿一覧ページの左箇所にある「投稿アイコン」を押すと、投稿ページが表示される。入力フォームに入力し、「シェア」ボタンを押す。<br>自身の削除したい投稿にカーソルを乗せると「削除ボタン」が現れる。そのまま「削除ボタン」を押す|
|投稿一覧への自動スクロール機能|トップページの中間にある投稿一覧までのスクロールの手間を無くすため|ヘッダーの「投稿一覧」ボタンを押す。「scroll-behavior: smooth;」が機能し、自動スクロールで投稿一覧まで遷移する|
|ページネーション機能|投稿一覧表を見やすくするため|投稿一覧の下部分にあるページ数で飛びたいページの「数字」を押す|
|マイページ機能|各個人の家計簿を管理できるようにするため|ログインしているユーザーがトップページのヘッダーにある「マイページ」ボタンを押す|
|家計簿登録/削除機能|家計簿を登録でき、削除できるようにするため|マイページの家計簿入力フォームでそれぞれの詳細を入力し、「登録」ボタンを押す。表示されてる家計簿データの下にある「削」ボタンを押す| 
|家計簿の詳細入力欄の追加と削除機能|必要な分だけ入力フォームを表示できたり削除できるようにするため|家計簿入力フォームにある「追加」「削除」ボタンを押す| 
|月別/日別検索機能|登録した家計簿の詳細を月別・日別で表示できるようにするため|マイページのヘッダーにある月別・日別のカレンダーで検索する日を選択し、「残高表示」「日別判定」のボタンを押す|
|残高表示機能|月別で残高が分かるようにするため|マイページのヘッダーにある月別のカレンダーで検索する月を選択し、「残高表示」のボタンを押す| 
|（1日の予算/合計金額）表示機能|1日の予算や月別・日別の出費額の合計を確認できるようにするため| マイページのヘッダーにある日別のカレンダーで検索する日を選択し、「日別判定」のボタンを押す| 
|1日の予算に対して達成したか判定する機能|予算達成の為に何を節約できたか分かるようにするため|マイページのヘッダーにある日別のカレンダーで検索する日を選択し、「日別判定」のボタンを押す| 
|日別の予算が達成したか色で判定機能|日別の予算が達成した日は青色、オーバーした日は赤色で表示して視覚的に分かりやすくする|マイページのヘッダーにある日別のカレンダーで検索する日を選択し、「日別判定」のボタンを押す| 

***
# 実装した機能についての紹介動画
[アプリの機能紹介動画](https://youtu.be/dRh48-GLd_I)

***
# データベース設計<br>
<img width="438" alt="827803735201455fa6341436bd20011a" src="https://user-images.githubusercontent.com/68362725/91797287-23812000-ec5d-11ea-9a86-a674219ee80b.png">

***
# ローカルでの動作方法<br>
①`git clone <コピーしたurl >`<br>
②`bundle install`<br>
③`rails db:create`<br>
④`rails db:migrate`<br>
⑤`rails s`<br>

ruby 2.6.5p114 <br>
Rails 6.0.3.2
