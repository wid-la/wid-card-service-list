'use strict';

(function () {

  Polymer({

    is: 'wid-card-service-list',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * engines
       * @type {Object}
       */
      engines: {
        type: Object
      },

      /**
       * status
       * @type {Object}
       */
      status: {
        type: Object
      }

    },

    _rowClass: function _rowClass(index) {
      var odd = '';
      if (index % 2 === 0) {
        odd = 'odd';
      }
      return odd + ' flex layout horizontal center-center';
    },

    _statusClass: function _statusClass(status) {
      if (status === 1) {
        return 'green';
      } else {
        return 'red';
      }
    },

    _iconPath: function _iconPath(value) {
      return '/images/cards/' + value;
    }

  });
})();