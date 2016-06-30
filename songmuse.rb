require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  @key = %w(C D E F G A B).sample
  @genre = %w(alternative blues classical country dance electronic hiphop industrial jazz metal pop R&B rock).sample
  @time_signature = ["4/4", "6/4", "6/8"].sample
  @tempo = (60..150).to_a.sample
  @arrangement = "Verse Chorus Verse Chorus Bridge Verse Chorus"
  @verse_chords = ["I vi IV V", "I vi ii V", "I ii IV V"].sample
  slim :index
end
