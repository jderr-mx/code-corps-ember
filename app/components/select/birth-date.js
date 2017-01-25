import Ember from 'ember';
import moment from 'moment';
import { range } from 'code-corps-ember/utils/array-utils';

const {
  Component,
  computed,
  get,
  getProperties,
  set
 } = Ember;

export default Component.extend({
  classNames: ['select-birth-date'],

  currentMoment: computed(function() {
    return moment();
  }),

  selectedMoment: computed('month', 'year', function() {
    let { month, year } = getProperties(this, 'month', 'year');
    return moment(`${year}-${month}`, 'Y-M');
  }),

  monthOptions: computed('currentMoment', 'selectedMoment', function() {
    let { currentMoment, selectedMoment }
      = getProperties(this, 'currentMoment', 'selectedMoment');

    let maxMonth = selectedMoment.isBefore(currentMoment, 'year')
                 ? 12 : currentMoment.month();

    return moment.months().slice(0, maxMonth + 1).map(this._formatMonth);
  }),

  dayOptions: computed('currentMoment', 'selectedMoment', function() {
    let { currentMoment, selectedMoment }
      = getProperties(this, 'currentMoment', 'selectedMoment');

    let maxDay = selectedMoment.isBefore(currentMoment, 'month')
               ? selectedMoment.daysInMonth() : currentMoment.date();

    return range(1, maxDay);
  }),

  yearOptions: computed(function() {
    let thisYear = moment().year();
    return range(thisYear - 120, thisYear).reverse();
  }),

  update(property, value) {
    set(this, property, value);

    if (property === 'month') {
      this._constrainDay();
    }

    if (property === 'year') {
      this._constrainDay();
      this._constrainMonth();
    }
  },

  _constrainDay() {
    let day = get(this, 'day');
    let days = get(this, 'dayOptions');
    let maxDay = days[days.length - 1];
    if (day > maxDay) {
      set(this, 'day', maxDay);
    }
  },

  _constrainMonth() {
    let month = get(this, 'month');
    let months = get(this, 'monthOptions');
    let maxMonth = months[months.length - 1];
    if (month > maxMonth.number) {
      set(this, 'month', maxMonth.number);
    }
  },

  _formatMonth(name, index) {
    return { text: name, number: index + 1 };
  }
});
