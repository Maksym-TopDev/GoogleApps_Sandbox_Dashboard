const Packer = require('zip-stream');


function zipDataIntoStream(fileData) {
  const archive = new Packer(); // OR new Packer(options)
  
  archive.on('error', function(err) {
    throw err;
  });
  
  // pipe archive where you want it (ie fs, http, etc)
  // listen to the destination's end, close, or finish event
  
  archive.entry('string contents', { name: 'string.txt' }, function(err, entry) {
    if (err) throw err;

    console.log("entry1", entry)
    archive.entry(null, { name: 'directory/' }, function(err, entry) {
      if (err) throw err;

      console.log("entry2", entry)
      archive.finish();
    });
  });

  return {
    buffer: "hey",
    tymimetypepe: "man"
  }
}

module.exports = {
  zipDataIntoStream
}