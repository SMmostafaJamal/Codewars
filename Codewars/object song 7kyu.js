// Your job is to create a class called Song.
//
// A new Song will take two parameters, title and artist.
//
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
//
// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'
//
// You will also have to create an instance method named howMany() (or how_many()).
// The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".


function Song(title, artist){
  this.title = title;
  this.artist = artist;
  this.peopleListened = new Set();

  this.howMany = function(people){
    let oldListenerList =  this.peopleListened.size
    people.filter(name => this.peopleListened.add(name.toLowerCase()))
    let newListenerList =  this.peopleListened.size

    return newListenerList - oldListenerList

    }

}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
const mount = new Song('Mount', ' Moose');

mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']);
mount.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus'])
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']);
