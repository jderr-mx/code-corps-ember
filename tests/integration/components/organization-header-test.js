import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('organization-header', 'Integration | Component | organization header', {
  integration: true
});

let organization = {
  name: 'Test Organization',
  description: 'A test organization',
  iconThumbUrl: 'icon_thumb.png',
  iconLargeUrl: 'icon_large.png',
};

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{organization-header}}`);

  assert.equal(this.$('.organization-header').length, 1);
});

test('when not expanded', function(assert) {
  assert.expect(4);

  this.set('organization', organization);

  this.render(hbs`{{organization-header organization=organization}}`);

  assert.equal(this.$('img').attr('src'), 'icon_thumb.png', "Has a small image");
  assert.ok(this.$('img').hasClass('icon'), "Uses the small image class");
  assert.equal(this.$('h2').text().trim(), 'Test Organization', "Shows the name");
  assert.equal(this.$('p').length, 0, "Hides the description");
});

test('when expanded', function(assert) {
  assert.expect(4);

  this.set('organization', organization);

  this.render(hbs`{{organization-header organization=organization expanded=true}}`);

  assert.equal(this.$('img').attr('src'), 'icon_large.png', "Has a large image");
  assert.ok(this.$('img').hasClass('icon large'), "Uses the small image class");
  assert.equal(this.$('h2').text().trim(), 'Test Organization', "Shows the name");
  assert.equal(this.$('p').text().trim(), 'A test organization', "Shows the description");
});
