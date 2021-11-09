function Song() {
}

Song.prototype.persistFavoriteStatus = function(value) {
  this.isFavorite = true;
};

module.exports = Song;
