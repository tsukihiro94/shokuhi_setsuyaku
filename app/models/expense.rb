class Expense < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category
  belongs_to :uesr, optional: true

  validates :day, presence: true

  def self.search(search)
    if search != ""
      Expense.where('day LIKE(?)', "%#{search}%")
    else
      Expense.all
    end
  end
end
