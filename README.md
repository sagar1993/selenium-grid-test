# selenium-grid-test
The project uses https://github.com/SeleniumHQ/docker-selenium docker containers to perform distributed e2e testing with selenium grid.

## Files in the project
### conf.js
protractor config file
```
seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['spec.js'],
  multiCapabilities: [{
    shardTestFiles: true,
        maxInstances: 1,
        sequential: true,
        browserName: 'chrome',
        specs: ['spec.js','spec.js','spec.js']
  },
```
seleniumAddress: address of selenium server
multiCapabilities: number of browser instances to run

### docker-compose.yml
selenium hub image: image: selenium/hub:2.53.1
selenium chrome driver image: selenium/node-chrome-debug:2.53.1-americium
### spec.js
file contains specs to run

# Steps to run the project.
- install docker on mac https://docs.docker.com/v17.12/docker-for-mac/install/
- start docker instance.
```
$ docker-compose up -d
$ docker-compose scale nodechrome=2 nodefirefox=2
```
- start grid
```$ docker-compose start```
- grid console
```127.0.0.1:4444/grid/console```
