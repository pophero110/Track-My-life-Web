import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TrackerList from '../trackerList';

test('click create tracker button', () => {
	const setFormVisible = jest.fn();
	render(<TrackerList formVisible={false} setFormVisible={setFormVisible} />);
	const createTrackerButton = screen.getByText('Create');
	expect(createTrackerButton).toBeInTheDocument();

	fireEvent.click(createTrackerButton);
	expect(setFormVisible).toHaveBeenCalledWith(true);
});

test('click go back button', () => {
	const setFormVisible = jest.fn();
	render(<TrackerList formVisible={true} setFormVisible={setFormVisible} />);
	const goBackButton = screen.getByText('Go Back');
	expect(goBackButton).toBeInTheDocument();

	fireEvent.click(goBackButton);
	expect(setFormVisible).toHaveBeenCalledWith(true);
});
