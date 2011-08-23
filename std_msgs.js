(function() {

  var root = this

  var ros = null
  var stdMsgs = null
  if (typeof exports !== 'undefined') {
    ros = require('./ros')
    stdMsgs = exports
  }
  else {
    ros = this.ros
    stdMsgs = root.stdMsgs = {}
  }

  // std_msgs/String
  // ---------------

  console.log(ros)
  stdMsgs.String = ros.Message.extend({
    defaults: {
      'data': null
    }
  }
  , {
    type: 'std_msgs/String'
  , md5sum: '992ce8a1687cec8c8bd883ec73ca41d1'
  })

}).call(this)
