/* globals Package */
Package.describe({
  name: 'unchained:core-products',
  version: '0.16.0',
  summary: 'Unchained Engine Core: Products',
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
  api.use('ostrio:files@1.9.11');
  api.use('unchained:utils@0.16.0');
  api.use('unchained:core@0.16.0');
  api.use('unchained:core-pricing@0.16.0');
  api.use('unchained:core-warehousing@0.16.0');
  api.use('unchained:core-countries@0.16.0');

  api.mainModule('products.js', 'server');
});

Package.onTest((api) => {
  api.use('ecmascript');
  api.use('unchained:core-products');
  api.mainModule('products-tests.js');
});