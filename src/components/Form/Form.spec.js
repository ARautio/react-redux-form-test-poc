import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon'

import { writeToField } from '../../utils/testing';

import Provider from '../../Provider';
import Form from './Form';

describe('<Form />', () => {
	let onSave
	let subject

	beforeEach(() => {
		onSave = sinon.stub().returns(Promise.resolve())
		const props = {
			onSave,
		}
		subject = mount(
			<Provider>
				<Form {...props}/>
			</Provider>
		)
	});

	it("Saving without firstname gives an error", () => {
		writeToField(subject, 'input');
		expect(subject.find('.error')).to.have.lengthOf(1)

		subject.find('form').first().simulate('submit')
		expect(onSave.calledOnce).to.be.equal(false);
	})

	it("Saving with firstname is fine", () => {
		writeToField(subject, 'input', 'New value');
		expect(subject.find('.error')).to.have.lengthOf(0)

		subject.find('form').first().simulate('submit')
		expect(onSave.calledOnce).to.be.equal(true);
	})
});