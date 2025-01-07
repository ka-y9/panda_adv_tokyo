import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

// 依存関係のインポート
import pandaChild from '../assets/images/characters/panda-child.png';
import pandaParent from '../assets/images/characters/panda-parent.png';
import tokyoStreet from '../assets/images/backgrounds/tokyo-street.png';
import tokyoTower from '../assets/images/backgrounds/tokyo-tower.png';

interface BookPageProps {
  pageNumber: number;
  pageText: string;
  backgroundImage: StaticImageData;
  characters?: StaticImageData[];
}

const BookPage: React.FC<BookPageProps> = ({
  pageNumber,
  pageText,
  backgroundImage,
  characters = []
}) => {
  const { t } = useTranslation('common');

  return (
    <div className="book-page relative w-full h-screen">
      {/* 背景画像 */}
      <Image 
        src={backgroundImage} 
        alt={`Page ${pageNumber} Background`} 
        layout="fill" 
        objectFit="cover" 
        priority 
      />

      {/* キャラクター配置 */}
      <div className="absolute inset-0 flex items-center justify-center">
        {characters.map((character, index) => (
          <Image 
            key={index}
            src={character} 
            alt={`Character ${index + 1}`} 
            width={200} 
            height={200} 
            className="absolute" 
            style={{
              left: `${20 * (index + 1)}%`,
              bottom: '10%'
            }}
          />
        ))}
      </div>

      {/* ページテキスト */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-black bg-opacity-50 text-white text-center">
        <p className="text-2xl">{t(pageText)}</p>
      </div>
    </div>
  );
};

export const getPageContent = (pageNumber: number) => {
  const pageContents = {
    1: {
      text: 'page1.text',
      background: tokyoStreet,
      characters: [pandaChild]
    },
    2: {
      text: 'page2.text',
      background: tokyoStreet,
      characters: []
    },
    3: {
      text: 'page3.text',
      background: tokyoTower,
      characters: [pandaChild, pandaParent]
    },
    4: {
      text: 'page4.text',
      background: tokyoStreet,
      characters: [pandaChild, pandaParent]
    }
  };

  return pageContents[pageNumber as keyof typeof pageContents];
};

export default BookPage;