import ky from 'ky';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import WikiCard from '../components/WikiCard';

function Wiki() {
  const [wiki, setWiki] = useState(false);
  useEffect(() => {
    ky.get('https://cinnabar.icaksh.my.id/public/daily/tawiki').json().then(({ data }) => {
      setWiki(data.data.info);
    });
  }, []);
  if (!wiki) return null;
  return (
    <>
      <Navbar />
      <div className="my-8 text-6xl font-bold text-center text-gray-600">
        <span>Daily Wiki</span>
      </div>
      <div className="container flex flex-wrap items-center justify-center w-full h-full mx-auto">
        {wiki.map((data, index) => <WikiCard key={index} index={index + 1} data={data.tahukah_anda.slice(11, -2)} />)}
      </div>
      <div className="mt-8 text-sm text-center text-gray-400">
        <p>
          Data Sourced From :
          {' '}
          <span className="italic">cinnabar.icaksh.my.id</span>
        </p>
      </div>
    </>
  );
}
export default Wiki;
