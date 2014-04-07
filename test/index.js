var slugify = require('..');

describe('slugification', function() {
  it('should work', function() {
    slugify('What is this?')
      .should.equal('What-is-this');

    slugify('ASN Ghana')
      .should.equal('ASN-Ghana');
  });
});