import Ember from 'ember';
import layout from '../templates/components/fixtable-column-header';

export default Ember.Component.extend({
  layout,
  tagName: 'th',
  column: null,
  sortBy: null,
  sortAscending: null,
  classNameBindings: ['filterActive:active', 'select_head:select_all'],
  select_head: Ember.computed('column', function(){
    if(this.get('column.key') === 'select_all'){
      return true;
    }
    return false;
  }),
  filterActive: false,
  actions: {
    sortColumn(columnKey) {
      this.sendAction('sortColumn', columnKey);
    },
    toggleFilter(){
      this.attrs.closeAllFilters();
      this.toggleProperty('filterActive');
    },
    selectAll() {
      this.set('filter', true);
    }
  },
  didInsertElement(){
    this._super(...arguments);
    this.$().css('min-width', this.get('column.width'));
  }
});
