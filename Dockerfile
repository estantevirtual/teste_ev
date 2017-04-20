FROM ruby:2.4

ADD ./code /usr/src/app

WORKDIR /usr/src/app
VOLUME ./code /usr/src/app

RUN gem install foreman
RUN bundle install

EXPOSE 3000
CMD rails server -b 0.0.0.0
