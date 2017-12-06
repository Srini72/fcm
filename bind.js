// NOTE: This example uses the next generation Twilio helper library - for more
// information on how to download and install this version, visit
// https://www.twilio.com/docs/libraries/node
var accountSid = 'AC74a086b6db02eae40ead19ef7b4a6371';
var authToken = 'b732117df89783e51fb648cde14c2fc4';
var Twilio = require('twilio');

var client = new Twilio(accountSid, authToken);
var service = client.notify.services('IS09154e5cae13dabcef99f308e7db4c05');

service.bindings.create({
               identity: 'io.ionic.starter',
               bindingType: 'fcm',
               address: "ffUTkrHXuAw:APA91bHepC--zLCZex6PqNqYpxph_ZVaBsrzv7DXaUUA0a9994LdEMs27SPlP6ES70MYPFoaCl1rcGYf-uliNg9NxKSDyltL8YNnfEvQRMAUmupIoq8clXMB6yYtevVwZSjmoHrmnXwY",
               tag: ['premium', 'new user']
}).then(function(binding) {
  console.log(binding);
}).catch(function(error) {
  console.log(error);
});
