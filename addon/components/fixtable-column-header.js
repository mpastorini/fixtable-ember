import Ember from 'ember';
import layout from '../templates/components/fixtable-column-header';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Ember.Component.extend(InboundActions, {
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
      console.log('abriendo: ' + this.get('column.header'));
      this.set('closeAll', true);
      let self = this;
      setTimeout(function(){
        self.set('closeAll', false);
        self.set('filterActive', true);
      }, 10);
    },
    closeFilter(){
      // this.attrs.closeAllFilters();
      console.log('cerrando: ' + this.get('column.header'));
      this.set('filterActive', false);
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
