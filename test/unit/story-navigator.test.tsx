import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoryNavigator from '../../components/story-navigator';

describe('StoryNavigator Component', () => {
  const mockProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders navigation buttons correctly', () => {
    render(<StoryNavigator {...mockProps} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('previous button is disabled on first page', () => {
    render(<StoryNavigator {...mockProps} currentPage={1} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    expect(prevButton).toBeDisabled();
  });

  test('next button is disabled on last page', () => {
    render(<StoryNavigator {...mockProps} currentPage={10} />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test('calls onPageChange when next button is clicked', () => {
    render(<StoryNavigator {...mockProps} currentPage={5} />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    
    expect(mockProps.onPageChange).toHaveBeenCalledWith(6);
  });

  test('calls onPageChange when previous button is clicked', () => {
    render(<StoryNavigator {...mockProps} currentPage={5} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(prevButton);
    
    expect(mockProps.onPageChange).toHaveBeenCalledWith(4);
  });

  test('displays current page number', () => {
    render(<StoryNavigator {...mockProps} currentPage={3} />);
    
    const pageNumber = screen.getByText(/3 \/ 10/);
    expect(pageNumber).toBeInTheDocument();
  });
});