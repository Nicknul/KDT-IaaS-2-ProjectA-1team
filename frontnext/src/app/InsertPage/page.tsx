'use client';
import Image from 'next/image';
import HeaderSection from '../ui/Header/headerSection';
import TotalInsert from '../ui/Insert/pages/TotalInsert';
import { LanguageProvider } from '../ui/SettingMoules/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <HeaderSection />
      <TotalInsert />
    </LanguageProvider>
  );
}
