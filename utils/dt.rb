#!/bin/env ruby

require "addressable/uri"
require "digest"

ARGV.each do |f|
    u = Addressable::URI.convert_path(File.absolute_path(f)).to_s
    t = "#{Dir.home}/.cache/thumbnails/normal/#{Digest::MD5.hexdigest(u)}.png"
    File.unlink(t) if File.file?(t)
end
