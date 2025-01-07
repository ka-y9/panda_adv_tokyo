import React, { useState } from 'react';
import BookPage from './book-page';
import { useTranslation } from 'react-i18next';

// ページテキストのインポート
import page1Text from '../story/text/page1.txt';
import page2Text from '../story/text/page2.txt';
import page3Text from '../story/text/page3.txt';
import page4Text from '../story/text/page4.txt';

// 背景画像のインポート
import tokyoStreetBg from '../assets/images/backgrounds/tokyo-street.png';
import tokyoTowerBg from '../assets/images/backgrounds/tokyo-tower.png';

// キャラクター画像のインポート
import pandaChild from '../assets/images/characters/panda-child.png';
import pandaParent from '../assets/images/characters/panda-parent.png';

interface StoryPage {
  text: string;
  background?: string;
  characters?: string[];
}

const StoryNavigator: React.FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const storyPages: StoryPage[] = [
    {
      text: page1Text,
      background: tokyoStreetBg,
      characters: [pandaChild]
    },
    {
      text: page2Text,
      background: tokyoStreetBg
    },
    {
      text: page3Text,
      background: tokyoTowerBg,
      characters: [pandaChild, pandaParent]
    },
    {
      text: page4Text,
      background: tokyoStreetBg,
      characters: [pandaChild, pandaParent]
    }
  ];

  const handleNextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="story-navigator">
      <BookPage 
        text={storyPages[currentPage].text}
        background={storyPages[currentPage].background}
        characters={storyPages[currentPage].characters}
      />
      <div className="navigation-controls">
        {currentPage > 0 && (
          <button onClick={handlePrevPage}>
            {t('previous_page')}
          </button>
        )}
        {currentPage < storyPages.length - 1 && (
          <button onClick={handleNextPage}>
            {t('next_page')}
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryNavigator;