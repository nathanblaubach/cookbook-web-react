import { render, within } from '@testing-library/react';
import { Page } from './Page';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Page', () => {

  it('displays cookbook logo, links and children', () => {

    // Arrange and Act
    const component = render(
      <BrowserRouter>
        <Page>
          <p>This is a child</p>
        </Page>
      </BrowserRouter>
    );

    // Assert
    expect(component.getByRole('img', { name: 'McClain Family Cookbook Logo' })).toBeDefined();

    const navigation = within(component.getByRole('navigation'));
    expect(navigation.getAllByRole('link').length).toBeGreaterThan(0);

    expect(component.getByRole('paragraph').textContent).toBe("This is a child");
  });

});