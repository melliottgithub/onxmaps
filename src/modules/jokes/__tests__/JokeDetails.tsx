import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react'

const mockGetJoke = (jokeId: string): Promise<Joke> => {
    return Promise.resolve({
    id: jokeId,
    joke: jokeText,
});
};

jest.mock('../../../services/jokes', () => {
    return {
        __esModule: true,
        default: {
            getJoke: mockGetJoke,
        },
    };
});

import JokeDetails from '../JokeDetails';
import { Joke } from '../../../services/jokes/types';
import { QueryClient, QueryClientProvider } from 'react-query';

const jokeText = 'Chuck Norris can divide by zero';

describe('JokeDetails', () => {

    it('should render a joke', async () => {
        const queryClient = new QueryClient()
        render(<QueryClientProvider client={queryClient}>
                <JokeDetails jokeId={ '1' } />
            </QueryClientProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText(jokeText)).toBeInTheDocument()
        }, { timeout: 50 });
    });
});

