$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "quick_search_grenander_theme/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "quick_search-grenander_theme"
  s.version     = QuickSearchGrenanderTheme::VERSION
  s.authors     = ["Greg Wiedeman"]
  s.email       = ["gwiedeman@albany.edu"]
  s.homepage    = "https://library.albany.edu/archive"
  s.summary     = "UAlbany's Bootstrap 4 theme for NC State's QuickSearch"
  s.description = "UAlbany's Bootstrap 4 theme for NC State's QuickSearch."
  s.license = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency 'quick_search-core', '~> 0.1'
  s.add_dependency 'bootstrap', '~> 4.1.3'
  s.add_dependency 'font-awesome-rails'
  s.add_dependency 'jquery-rails'
  s.add_dependency 'font-awesome-sass'
  s.add_dependency 'd3-rails'
  s.add_dependency 'lodash-rails'

end
