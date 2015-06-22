import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('intro');
  this.route('why', function(){
    this.route('best-of-breed');
    this.route('privacy-control');
    this.route('unified-platform');
    this.route('cutting-edge-features');
    this.route('efficiency');
    // this.route('pay-it-forward');
    // this.route('synergy');
    this.route('best-deal');
  });
  this.route('platform', function(){
    this.route('dashboard');
    this.route('estore');
    this.route('email');
    this.route('crm');
    this.route('profile');
    this.route('content-curation');
    this.route('blog');
    this.route('calendar-events');
    this.route('todos');
    this.route('builder');
    this.route('analytics');
    this.route('messenger');
  });
  this.route('roadmap', function(){
  });
  this.route('custom-services', function(){
    this.route('design'
    );
    this.route('marketing');
  });
  this.route('store', function(){});
  this.route('next-steps', function(){
  });
  this.route('gallery', function(){});
  this.route('sandbox', function(){
    this.route('templates');
    this.route('plugins');
  });
});

export default Router;
