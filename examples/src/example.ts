import PdgUtil from '@pdg/util';

const ll = console.log;

ll(
  'empty',
  PdgUtil.compare.empty('test'),
  PdgUtil.compare.empty(''),
  PdgUtil.compare.empty(0),
  PdgUtil.compare.empty(1),
  PdgUtil.compare.empty([]),
  PdgUtil.compare.empty({}),
  PdgUtil.compare.empty(null),
  PdgUtil.compare.empty(undefined)
);

ll(
  'notEmpty',
  PdgUtil.compare.notEmpty('test'),
  PdgUtil.compare.notEmpty(''),
  PdgUtil.compare.notEmpty(0),
  PdgUtil.compare.notEmpty(1),
  PdgUtil.compare.notEmpty([]),
  PdgUtil.compare.notEmpty({}),
  PdgUtil.compare.notEmpty(null),
  PdgUtil.compare.notEmpty(undefined)
);
