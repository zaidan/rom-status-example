# Example Plugin
class Example < Status::Plugin
  # Return url
  #
  # @return [String]
  #
  # @api private
  #
  def url
    "https://github.com/#{project_name}"
  end
  memoize :url

  # Return image source
  #
  # @return [String]
  #
  # @api private
  #
  def image_src
    'https://github.com/favicon.ico'
  end
  memoize :image_src
end
