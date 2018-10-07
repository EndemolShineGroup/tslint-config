const config = require('.');

describe('tslint-config', () => {
  it('has a bunch of rules', () => {
    expect(Object.keys(config.rules).length).toBeGreaterThan(1);
  });
});
