class Dishes < ActiveRecord::Base
  validates :name,
    presence: true,
    length: {in: 6..10}
  validates :img_url,
    presence: true
end
