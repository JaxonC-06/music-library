const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
       for (const key in this.playlists) {
              const playlist = this.playlists[key];
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       }
  },
  printTracks: function() {
       for (const key in this.tracks) {
              const track = this.tracks[key];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
  },
  printPlaylist: function(playlistId) {
       const playlist = this.playlists[playlistId];
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
              for (const trackId of playlist.tracks) {
                     const track = this.tracks[trackId];
                     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
              }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
       const playlist = this.playlists[playlistId];
       playlist.tracks.push(trackId);
  },
  generateUid: function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
       const trackId = this.generateUid();
       const track = {
              "id": trackId,
              "name": name,
              "artist": artist,
              "album": album
       };

       this.tracks[trackId] = track;
  },
  addPlaylist: function(name) {
       const playlistId = this.generateUid();
       const playlist = {
              "id": playlistId,
              "name": name,
              "tracks": []
       };

       this.playlists[playlistId] = playlist;
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// Test - printPlaylists
// console.log(library.printPlaylists());


// Test - printTracks
// console.log(library.printTracks());


// Test - printPlaylist
// console.log(library.printPlaylist("p01"));


// Test - addTrackToPlaylist
// library.addTrackToPlaylist("t01", "p02");
// console.log(library.printPlaylist("p02"));


// Test - generateUid
// console.log(library.generateUid());


// Test - addTrack
// library.addTrack("Never Gonna Give You Up", "Rick Astley", "Greatest of Rick Astley");
// console.log(library.tracks);


// Tests - addPlaylist
// library.addPlaylist("Chill Tunes"); 
// console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}