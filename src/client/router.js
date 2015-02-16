/**
 * @file
 * Contains global router configurations.
 */
/* globals Router */

Router.configure({
  layoutTemplate: 'layoutMain'
});

Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});
