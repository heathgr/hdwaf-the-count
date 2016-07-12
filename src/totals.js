'use strict';

const statuses = require('../config/common/statuses');
const genders = require('../config/common/genders');
const ageRanges = require('../config/common/ageRanges');

let totals = {
  statusTotals: {
    overall: statuses.map(() => 0),
    byGender: genders.map(() => statuses.map(() => 0)),
    byAgeRange: ageRanges.map(() => statuses.map(() => 0)),
  },
  genderTotals: {
    overall: genders.map(() => 0),
    byStatus: statuses.map(() => genders.map(() => 0)),
    byAgeRange: ageRanges.map(() => genders.map(() => 0)),
  },
  ageRangeTotals: {
    overall: ageRanges.map(() => 0),
    byStatus: statuses.map(() => ageRanges.map(() => 0)),
    byGender: genders.map(() => ageRanges.map(() => 0)),
  },
  overallCount: 0,
};

module.exports = totals;
