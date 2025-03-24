source "https://rubygems.org"

# 이것이 핵심입니다 - GitHub Pages 젬을 사용합니다
gem "github-pages", group: :jekyll_plugins

# 필요한 플러그인들
group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jemoji"
end

# Windows와 JRuby는 특별한 처리가 필요합니다
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# 성능 향상을 위한 HTTP 플러그인
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
