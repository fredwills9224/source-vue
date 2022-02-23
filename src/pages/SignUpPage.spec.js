import SignUpPage from './SignUpPage.vue';
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';

describe('Sign Up Page', ()=>{

    describe('Layout', ()=>{

        it('has Sign Up Header', ()=>{

            render(SignUpPage);
            const header = screen.queryByRole('heading', { name: 'Sign Up' });
            expect(header).toBeInTheDocument();
        
        });
        it('has username input', ()=>{

            render(SignUpPage);
            const input = screen.queryByPlaceholderText('username');
            expect(input).toBeInTheDocument();

        });
        it('has email input', ()=>{

            render(SignUpPage);
            const input = screen.queryByPlaceholderText('e-mail');
            expect(input).toBeInTheDocument();

        });

    });
    
});