/* globals Package */
Package.describe({
  name: 'unchained:core-filters',
  version: '0.16.0',
  summary: 'Unchained Engine Core: Filters',
  git: '',
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.versionsFrom('1.8');
  api.use('ecmascript');
  api.use('mongo');
  api.use('promise');
  api.use('dburles:factory@1.1.0');
  api.use('dburles:collection-helpers@1.1.0');
  api.use('unchained:utils@0.16.0');
  api.use('unchained:core@0.16.0');
  api.use('unchained:core-products@0.16.0');
  api.use('unchained:core-logger@0.16.0');

  api.mainModule('filters.js', 'server');
});

Package.onTest((api) => {
  api.use('ecmascript');
  api.use('unchained:core-filters');
  api.mainModule('filters-tests.js');
});