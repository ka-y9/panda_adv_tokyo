import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BookPage from '../components/book-page';
import StoryNavigator from '../components/story-navigator';

// ストーリーテキストのインポート
import page1Text from '../story/text/page1.txt';
import page2Text from '../story/text/page2.txt';
import page3Text from '../story/text/page3.txt';
import page4Text from '../story/text/page4.txt';

// キャラクターと背景画像のインポート
import pandaChild from '../assets/images/characters/panda-child.png';
import pandaParent from '../assets/images/characters/panda-parent.png';
import tokyoStreet from '../assets/images/backgrounds/tokyo-street.png';
import tokyoTower from '../assets/images/backgrounds/tokyo-tower.png';

const PandaStoryBook: React.FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      id: 1,
      text: page1Text,
      backgroundImage: tokyoStreet,
      character: pandaChild
    },
    {
      id: 2,
      text: page2Text,
      backgroundImage: tokyoStreet,
      character: null
    },
    {
      id: 3,
      text: page3Text,
      backgroundImage: tokyoTower,
      character: pandaParent
    },
    {
      id: 4,
      text: page4Text,
      backgroundImage: tokyoStreet,
      character: pandaChild
    }
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPageData = pages.find(page => page.id === currentPage);

  return (
    <div className="panda-story-book">
      <BookPage 
        text={currentPageData?.text || ''}
        backgroundImage={currentPageData?.backgroundImage}
        character={currentPageData?.character}
      />
      <StoryNavigator 
        currentPage={currentPage}
        totalPages={pages.length}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default PandaStoryBook;