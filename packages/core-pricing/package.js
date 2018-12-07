/* globals Package */
Package.describe({
  name: 'unchained:core-pricing',
  version: '0.16.0',
  summary: 'Unchained Engine Core: Pricing',
  git: '',
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.versionsFrom('1.8');
  api.use('ecmascript');
  api.use('unchained:core-logger@0.16.0');

  api.mainModule('pricing.js', 'server');
});

Package.onTest((api) => {
  api.use('ecmascript');
  api.use('unchained:core-pricing');
  api.mainModule('pricing-tests.js');
});