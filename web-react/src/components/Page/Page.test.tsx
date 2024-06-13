import { render, within } from '@testing-library/react';
import { Page } from './Page';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Page', () => {

  // Arrange and Act
  const component = render(
    <BrowserRouter>
      <Page>
        <p>This is a child</p>
      </Page>
    </BrowserRouter>
  );

  it('should display cookbook logo', () => {
    // Assert
    expect(component.getByRole('img', { name: 'McClain Family Cookbook Logo' })).toBeDefined();
  });

  it('should display navigation links', () => {
    // Assert
    const navigation = within(component.getByRole('navigation'));
    expect(navigation.getAllByRole('link').length).toBeGreaterThan(0);
  });

  it('should display children', () => {
    // Assert
    expect(component.getByRole('paragraph').textContent).toBe("This is a child");
  });

});