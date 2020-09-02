![readme](https://user-images.githubusercontent.com/68362725/91681205-9f5d6880-eb88-11ea-8ea3-f0d763c71195.png)
# アプリケーション名
 カンタン食費節約家計簿アプリ


***
# 概要
 食費は、20〜30代女性の１ヶ月の平均出費額の割合で家賃につづき大部分を占めています。
 そこで、貯金を目的として家計簿をつけた経験はあるものの、実際に貯金までできなかった、
 どの食費を節約できるかイマイチ分からないという結果で終わった割合は、約６割と言われています。
 このアプリでは、直感的に家計簿を簡単に付けることができます。
 更に、食費に特化した家計簿なので1日の予算が達成出来なかった時は、どの食費を節約したら予算達成出来たか教えてくれる機能もあります。
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
 ③日別で予算達成したか判定する<br>
 ④節約術投稿一覧ページで投稿を見たり、投稿をしたりする

***
# 目指した課題解決
・節約をしたくて家計簿をつけたがイマイチ節約まで出来ていない<br>
・まず、食費の中で何が節約できるか分からないなどの課題を解決することを目指しました。

***
# 洗い出した要件
 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） |
----|----|----|----
| ユーザー登録機能 |マイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|「新規登録」ボタンを押し、入力フォームに従って入力する。<br>最後に「登録」ボタンを押す|

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） |
----|----|----|---- 
| ユーザー情報編集機能 |ニックネームと月次食費目標額が変更できるようにするため|ニックネームと食費の目標額をいつでも編集を可能にする|「目標予算を編集」のボタンを押す。<br>入力フォームで変更したい箇所を入力し、最後に「変更」ボタンを押す|

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） |
----|----|----|---- 
| ログイン/ログアウト機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す|

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） |
----|----|----|---- 
| 節約術投稿/削除機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す|

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| ページネーション 機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| マイページ機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| 家計簿登録/ 削除機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| 家計簿の詳細入力欄の追加と削除機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| 月別/日別検索機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| 残高表示機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| （1日の予算/合計金額）表示機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

 | 実装した機能 | 目的 | 詳細 | ストーリー（ユースケース） | 見積もり（所要時間：〇h |
----|----|----|----|----| 
| 1日の予算に対して達成したか判定する機能 |ユーザー登録をしてマイページを持てるようにするため|deviseを利用して、ユーザー登録を可能にする|トップページのヘッダーにある「新規登録」ボタンを押し、入力フォームに従って入力する。最後に「登録」ボタンを押す||

***
# 実装した機能についての紹介動画
[アプリの機能紹介動画](https://youtu.be/NYTx00hOMuQ)

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
