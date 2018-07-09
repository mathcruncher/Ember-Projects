import Component from '@ember/component';
import EmberObject, {computed} from '@ember/object';


export default Component.extend({
  className: ['percentage-bar'],
  percentage: '0',
  value: '0',
  total: '1',
  percentage: computed ('value', 'total', function () {
    let value = this.get('value');
    let total = this.get('total');
    return Math.round((value/total)*100);
  }),
  barWidth: computed ('percentage', function () {
    let percentage = this.get('percentage');
    return Ember.String.htmlSafe("width: "+percentage+"%");
  })
});
