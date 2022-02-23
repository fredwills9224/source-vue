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

            const { container } = render(SignUpPage);
            const input = container.querySelector('input');
            expect(input).toBeInTheDocument();

        });
        it('has email input', ()=>{

            const { container } = render(SignUpPage);
            const inputCount = container.querySelectorAll('input').length;
            expect(inputCount).toBe(2);

        });

    });
    
});