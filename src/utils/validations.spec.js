import { expect } from 'chai';

import { mandatory } from './validations'

describe('Validations', () => {
	describe('mandatory', () => {
		it("Some value is okay", () => {
			expect(mandatory()("Test")).to.be.equal(undefined);
		});
		it("Undefined gives an error", () => {
			expect(mandatory()(undefined)).to.be.equal("Error");
		});
	});
});