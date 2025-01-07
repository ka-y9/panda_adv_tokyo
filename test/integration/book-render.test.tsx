import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookPage from '../../pages/index';
import { BookProvider } from '../../contexts/book-context';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../lib/i18n';

describe('Book Rendering Integration Test', () => {
  beforeEach(() => {
    // テスト前の初期設定
    i18n.changeLanguage('ja'); // デフォルト言語を日本語に設定
  });

  test('絵本ページが正常にレンダリングされる', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BookProvider>
          <BookPage />
        </BookProvider>
      </I18nextProvider>
    );

    // 主要な要素の存在を確認
    expect(screen.getByTestId('book-container')).toBeInTheDocument();
    expect(screen.getByTestId('page-navigator')).toBeInTheDocument();
  });

  test('ページ遷移が正常に動作する', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BookProvider>
          <BookPage />
        </BookProvider>
      </I18nextProvider>
    );

    // 次のページボタンをクリック
    const nextPageButton = screen.getByTestId('next-page-button');
    fireEvent.click(nextPageButton);

    // ページ番号が変更されたことを確認
    expect(screen.getByTestId('current-page')).toHaveTextContent('2');
  });

  test('言語切り替えが正常に動作する', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BookProvider>
          <BookPage />
        </BookProvider>
      </I18nextProvider>
    );

    // 言語切り替えボタンをクリック
    const languageSwitchButton = screen.getByTestId('language-switch-button');
    fireEvent.click(languageSwitchButton);

    // 言語が切り替わったことを確認
    expect(i18n.language).toBe('en');
  });

  test('絵本のコンテンツが正確に表示される', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BookProvider>
          <BookPage />
        </BookProvider>
      </I18nextProvider>
    );

    // 特定のコンテンツ要素の存在を確認
    expect(screen.getByTestId('book-title')).toBeInTheDocument();
    expect(screen.getByTestId('page-illustration')).toBeInTheDocument();
    expect(screen.getByTestId('page-text')).toBeInTheDocument();
  });
});