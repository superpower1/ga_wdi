require 'zombie'

describe Zombie do
  context 'with inputs' do
    it 'has name' do
      expect(Zombie.new('Lancer').name).to eq('Lancer')
    end
  end

  context 'without inputs' do
    let :zombie do
      Zombie.new
    end

    it 'has not eaten brains after created' do
      expect(zombie.brains_eaten).to eq(0)
    end

    it 'is hungry when it has not eaten brains' do
      expect(zombie).to be_hungry
    end

    it "adds to brains eaten when it eats" do
      expect {zombie.eat_brains}.to change {zombie.brains_eaten}.from(0).to(1)
    end

    it 'is full when it eats five brains' do
      5.times do
        zombie.eat_brains
      end
      expect(zombie).to be_full
    end
  end

end
