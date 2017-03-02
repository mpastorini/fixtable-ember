import Ember from 'ember';
import layout from '../templates/components/fixtable-column-label';

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  actions: {
    toggleFilter(){
      this.toggleProperty('filterActive');
    },
    selectAll(){
    	this.attrs.applyManualFilter();
    }
  }
});
