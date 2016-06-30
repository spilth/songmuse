require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  @key = %w(C D E F G A B).sample
  @scale = %w(Major Dorian Phrygian Lydian Mixolydian Minor Locrian).sample
  @genre = %w(Alternative Blues Classical Country Dance Electronic Hiphop Industrial Jazz Metal Pop R&B Rock).sample
  @time_signature = ["4/4", "6/4", "6/8"].sample
  @tempo = (60..150).to_a.sample
  @arrangement = "Verse Chorus Verse Chorus Bridge Verse Chorus"

  chords = ["I vi IV V", "I vi ii V", "I ii IV V"]
  @verse_chords = chords.sample
  @chorus_chords = chords.sample

  slim :index
end
