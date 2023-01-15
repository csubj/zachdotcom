import Head from 'next/head';
import Image from 'next/image';
import Meta from '@/components/meta';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Meta />
      <main className={styles.main}>
        Zach Barner .... coming soon. 
      </main>
    </>
  );
}
