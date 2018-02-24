describe User do
  it "is invalid without a name" do
    expect(User.new).to_not be_valid
  end

  it "is invalid if password is less than 8 chars" do

  end
end
