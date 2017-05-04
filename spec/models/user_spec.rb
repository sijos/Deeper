require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { User.create!(username: 'test_user', password: 'password')}

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do
    it { should have_many(:reviews) }
    it { should have_many(:photos) }
  end

  # describe '.find_by_credentials' do
  #   context 'when given valid credentials' do
  #     it 'should find and return the correct user' do

  
  
end
