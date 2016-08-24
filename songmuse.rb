require 'sinatra'
require 'sinatra/reloader' if development?
require 'yaml'

get '/' do
  slim :index
end

get '/challenge' do
  @key = YAML::load_file('data/keys.yml').sample
  @scale = YAML::load_file('data/scales.yml').sample
  @genre = YAML::load_file('data/genres.yml').sample
  @time_signature = YAML::load_file('data/time_signatures.yml').sample
  @tempo = (60..150).to_a.sample
  @arrangement = YAML::load_file('data/arrangements.yml').sample

  chords = ["I vi IV V", "I vi ii V", "I ii IV V"]
  @verse_chords = chords.sample
  @chorus_chords = chords.sample

  slim :challenge
end

get '/prompt' do
  prompts = YAML::load_file('data/prompts.yml')

  @prompt = prompts.sample

  slim :prompt
end

get '/object-writing' do
  words = File.readlines 'data/object-writing.txt'
  @word = words.sample

  slim :object_writing
end

get '/resources' do
  @resources = YAML::load_file('data/resources.yml')

  slim :resources
end