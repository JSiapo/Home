import Head from 'next/head';
import BasicLayout from '../layouts/BasicLayout';
export default function Home() {
  return (
    <div>
      <Head>
        <title>JSiapo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BasicLayout>
        <h1>Welcome 🎉</h1>
      </BasicLayout>
    </div>
  );
}
