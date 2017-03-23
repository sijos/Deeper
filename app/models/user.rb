class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  after_initialize :ensure_session_token
  before_validation :ensure_unique_session_token

  has_many :reviews
  has_many :photos

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def reset_session_token!
    self.session_token = new_session_token
    ensure_unique_session_token
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  private

  def new_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def ensure_unique_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

end
