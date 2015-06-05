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
      this.route('forum');
      this.route('email-marketing');
      this.route('on-page-seo');
      this.route('team-manager');
      this.route('crowdfunding');
      this.route('ad-campaign');
      this.route('dynamic-settings-control');
      this.route('keyword-research');
      this.route('push-notifications');
    });

    this.route('partnerships', function(){
      this.route('investor');
      this.route('reseller');
    });
    this.route('pay-it-forward', function(){
      this.route('referrals', function(){
        this.route('contract');
        this.route('residual');
      });
      this.route('allocated-idea');
      this.route('new-hires');
      this.route('like-share-tweet');
      this.route('coders-club');
      this.route('contributors-cut');
    });
    this.route('custom-services', function(){
      this.route('design'
        // this.route('front-end-swap', function(){
        // });
        // this.route('mockups', function(){
        // });
        // this.route('app-scaffold', function(){
        // });
        // this.route('style-guide', function(){
        //   this.route('color-scheme');
        //   this.route('font-selection');
        // });
        // this.route('photoshop', function(){
        //   this.route('logo-design');
        //   this.route('custom-image');
        // });
        // this.route('illustrator', function(){
        //   this.route('logo-design');
        //   this.route('custom-image');
        // });
      );
      this.route('marketing'
        // this.route('email-campaign');
        // this.route('keyword-research');
        // this.route('on-page-seo');
        // this.route('content-planning');
        // this.route('remote-sales');
        // this.route('promo-video');
        // this.route('voice-overs');
        // this.route('content-curation');
        // this.route('link-building');
      );

      this.route('development', function(){
        this.route('store');
        this.route('platform');
        this.route('feature');
      });
      this.route('networking', function(){
        this.route('fastboot');
        this.route('content-delivery-network');
        this.route('hosting');
      });
      this.route('security-check');
      this.route('site-search');
    });
    this.route('features', function(){

    });
    this.route('store', function(){});
    this.route('next-steps', function(){
      this.route('evaluation');
      this.route('quotes');
      this.route('references');
      this.route('beta-application');
    });
    // this.route('collaboration-modules', function(){});
    this.route('gallery', function(){});
    this.route('sandbox', function(){
      this.route('templates')
      this.route('plugins');
    });
  this.route('lost-grid', function() {
    this.route('waffle');
    this.route('align');
    this.route('center');
    this.route('column');
    this.route('cycle');
    this.route('flex-container');
    this.route('move');
    this.route('offset');
    this.route('row');
    this.route('nest');
    this.route('vertical');
  });
});

export default Router;
