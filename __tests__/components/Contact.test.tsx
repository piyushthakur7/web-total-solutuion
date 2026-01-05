import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../../components/Contact';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        button: ({ children, onClick, ...props }: any) => <button onClick={onClick} {...props}>{children}</button>,
        section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
        span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Contact Component', () => {
    it('renders correctly', () => {
        render(<Contact />);
        expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
    });

    it('allows user to fill out the form', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText('Your full name');
        const emailInput = screen.getByPlaceholderText('your@email.com');
        const messageInput = screen.getByPlaceholderText('Tell us about your project...');

        fireEvent.change(nameInput, { target: { value: 'Test User' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello, this is a test.' } });

        expect(nameInput).toHaveValue('Test User');
        expect(emailInput).toHaveValue('test@example.com');
        expect(messageInput).toHaveValue('Hello, this is a test.');
    });

    it('shows success message after submission', async () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText('Your full name');
        const emailInput = screen.getByPlaceholderText('your@email.com');
        const messageInput = screen.getByPlaceholderText('Tell us about your project...');
        const submitButton = screen.getByText('Send Message');

        fireEvent.change(nameInput, { target: { value: 'Test User' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello, this is a test.' } });

        fireEvent.click(submitButton);

        // Wait for the async simulation (1000ms in component)
        await waitFor(() => {
            expect(screen.getByText("Message sent successfully! We'll get back to you soon.")).toBeInTheDocument();
        }, { timeout: 2000 });
    });
});
