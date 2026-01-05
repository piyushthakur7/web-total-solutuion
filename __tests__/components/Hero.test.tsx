import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../components/Hero';

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}));

// Mock ThreeScene to avoid canvas issues
jest.mock('../../components/ThreeScene', () => {
    return function MockThreeScene() {
        return <div data-testid="three-scene">Three Scene</div>;
    };
});

// Mock Next.js Link
jest.mock('next/link', () => {
    return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('Hero Component', () => {
    it('renders main heading', () => {
        render(<Hero />);
        expect(screen.getByText(/Crafting/i)).toBeInTheDocument();
        expect(screen.getByText(/Digital Excellence/i)).toBeInTheDocument();
    });

    it('renders call to action buttons', () => {
        render(<Hero />);
        expect(screen.getByText('Start Project')).toBeInTheDocument();
        expect(screen.getByText('View Work')).toBeInTheDocument();
    });
});
