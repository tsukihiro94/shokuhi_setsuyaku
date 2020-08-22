class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :nickname, presence: true, uniqueness: { case_sensitive: true }
  validates :target_amount,presence: true, numericality: { only_integer: true }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :password, format: {with: /\A(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}\z/, message: "Include both letters and numbers"}

  has_many :expenses
  has_many :post
end
 