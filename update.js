var exec = require('child_process').exec;
// console.log('git add .');
exec('git add .',{ cwd: '.' },function(err,stdout,stderr) {
    console.log(err,stdout,stderr);
    // console.log('git commit -m "publish"');
    exec('git commit -m "publish"',{ cwd: '.' },function(err,stdout,stderr) {
      console.log(err,stdout,stderr);
      // console.log('git push');
      exec('git push',{ cwd: '.' },function(err,stdout,stderr) {
        console.log(err,stdout,stderr);
      });
    });
});

