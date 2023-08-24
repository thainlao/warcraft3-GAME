import React, { useState, useEffect } from 'react';


import alchemist from '../img/alchemist.png';
import archimag from '../img/archimag.png';
import blademaster from '../img/blademaster.png';
import bloodmage from '../img/bloodmage.png';
import drowranger from '../img/drowranger.png';
import flamebeard from '../img/flamebeard.png';
import Acolyte from '../img/Acolyte.png';
import archer from '../img/archer.png';
import bugay from '../img/bugay.png';
import dreadlord from '../img/dreadlord.png';
import footman from '../img/footman.png';
import foresttroll from '../img/foresttroll.png';
import taurenhero from '../img/taurenhero.png';
import tauren from '../img/tauren.png';
import medusa from '../img/medusa.png';
import sf from '../img/sf.png';
import shadowhanter from '../img/shadowhanter.png';
import shamanorc from '../img/shamanorc.png';
import spitirotc from '../img/spitirotc.png';
import trall from '../img/trall.png';
import volshebnica from '../img/volshebnica.png';
import jaina from '../img/jaina.png';
import knights from '../img/knights.png';
import raider from '../img/raider.png';
import pudge from '../img/pudge.png';
import gyrocopter from '../img/gyrocopter.png';
import wywern from '../img/wywern.png';
import utter from '../img/uter.png';
import priest from '../img/priest.png';
import snipper from '../img/sniper.png';
import mirana from '../img/mirana.png';
import dethking from '../img/dethking.png';
import demonhanter from '../img/demonhanter.png';
import TA from '../img/TA.png';
import orcshaman from '../img/orcshaman.png';
import orcrab from '../img/orcrab.png';
import druidvoron from '../img/druidvoron.png';
import spider from '../img/spider.png';
import gryphon from '../img/gryphon.png';
import huntres from '../img/huntres.png';
import keeper from '../img/keeper.png';
import rabhum from '../img/rabhum.png';
import necr from '../img/necr.png';
import netopir from '../img/netopir.png';
import yastrebhum from '../img/yastrebhum.png';

import troll from '../sounds/Лесной троль.mp3';
import Acolytes from '../sounds/Acolyte.mp3';
import Kern from '../sounds/Kern.mp3';
import bugays from '../sounds/bugay.mp3';
import deathknight from '../sounds/deathknight.mp3';
import dreadlords from '../sounds/dreadlord.mp3';
import druidvorons from '../sounds/druidvoron.mp3';
import elfkentarius from '../sounds/elfkentarius.mp3';
import griphon from '../sounds/griphon.mp3';
import gyrocopters from '../sounds/gyrocopter.mp3';
import humanworker from '../sounds/humanworker.mp3';
import huntreself from '../sounds/huntreself.mp3';
import invoker from '../sounds/invoker.mp3';
import minotaur from '../sounds/minotaur.mp3';
import miranas from '../sounds/mirana.mp3';
import necromant from '../sounds/necromant.mp3';
import netopirorc from '../sounds/netopirorc.mp3';
import knight from '../sounds/knight.mp3';
import paukanded from '../sounds/paukanded.mp3';
import priesthum from '../sounds/priesthum.mp3';
import pudges from '../sounds/pudge.mp3';
import raborc from '../sounds/raborc.mp3';
import raiderorc from '../sounds/raiderorc.mp3';
import sniper from '../sounds/sniper.mp3';
import spiritorc from '../sounds/spiritorc.mp3';
import trollorc from '../sounds/trollorc.mp3';
import uter from '../sounds/uter.mp3';
import Yastrebhum from '../sounds/Yastrebhum.mp3';
import archers from '../sounds/archer.mp3';
import volshebnicas from '../sounds/volshebnica.mp3';
import demonhanters from '../sounds/demonhanter.mp3';
import TAelf from '../sounds/TAelf.mp3';
import footmans from '../sounds/footman.mp3';
import blademasters from '../sounds/blademaster.mp3';
import vivernaorc from '../sounds/vivernaorc.mp3';



const imageInfo = [
  { image: foresttroll, sound: troll },
  { image: necr, sound: necromant },
  { image: archimag, sound: Acolyte },
  { image: blademaster, sound: blademasters },
  { image: pudge, sound: pudges },
  { image: bugay, sound: bugays },
  { image: Acolyte, sound: Acolytes },
  { image: raider, sound: raiderorc },
  { image: dreadlord, sound: dreadlords },
  { image: spitirotc, sound: spiritorc },
  { image: gyrocopter, sound: gyrocopters },
  { image: wywern, sound: vivernaorc },
  { image: utter, sound: uter },
  { image: priest, sound: priesthum },
  { image: snipper, sound: sniper },
  { image: mirana, sound: miranas },
  { image: bloodmage, sound: invoker },
  { image: dethking, sound: deathknight },
  { image: taurenhero, sound: Kern },
  { image: archer, sound: archers },
  { image: volshebnica, sound: volshebnicas },
  { image: demonhanter, sound: demonhanters },
  { image: knights, sound: knight },
  { image: TA, sound: TAelf },
  { image: orcshaman, sound: trollorc },
  { image: footman, sound: footmans },
  { image: druidvoron, sound: druidvorons },
  { image: spider, sound: paukanded },
  { image: gryphon, sound: griphon },
  { image: tauren, sound: minotaur },
  { image: huntres, sound: huntreself },
  { image: keeper, sound: elfkentarius },
  { image: rabhum, sound: humanworker },
  { image: orcrab, sound: raborc },
  { image: netopirorc, sound: netopir },
  { image: yastrebhum, sound: Yastrebhum },

];

function Game () {
  const [randomImages, setRandomImages] = useState([]);
  const [selectedSound, setSelectedSound] = useState(null);
  const [correctImage, setCorrectImage] = useState(null);
  const [score, setScore] = useState(0);

  const [username, setUsername] = useState('');
  const [userScores, setUserScores] = useState({});

  useEffect(() => {
    if (score !== 0) {
      setUserScores((prevUserScores) => ({
        ...prevUserScores,
        [username]: score,
      }));
    }
  }, [score, username]);


  const handlePlay = () => {
    const shuffledImages = shuffleArray(imageInfo);
    const selectedImages = shuffledImages.slice(0, 4);
    setRandomImages(selectedImages);
    const randomIndex = Math.floor(Math.random() * selectedImages.length);
    const selectedSound = selectedImages[randomIndex].sound;
    const correctImage = selectedImages[randomIndex].image;
    setSelectedSound(selectedSound);
    setCorrectImage(correctImage);
  };

  const handleImageClick = (clickedImage) => {
    if (clickedImage === correctImage) {
      setScore(score + 1);
    } else {
      setScore(0);
    }
    handlePlay();
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <div className='flex justify-center items-center gap-3 flex-col'>
          <input
      type="text"
      placeholder="Твое имя?"
      className="text-2xl font-mono rounded-md w-64 h-12 px-4 shadow-md"
      onChange={(e) => setUsername(e.target.value)}
    />
      <button className='text-4xl font-mono
      rounded-md w-32 h-14 shadow-md bg-[#c43a3a] hover:bg-[#a12f2f]
        shadow-black' onClick={handlePlay}>Play</button>
      <div style={{ width: '70px' }} className="justify-center items-center cursor-pointer image-row py-10 flex gap-10">
        {randomImages.map((item, index) => (
          <img
            className='expand'
            key={index}
            src={item.image}
            alt={item.sound}
            onClick={() => handleImageClick(item.image)}
          />
        ))}
      </div>
      <div className='py-10'>
      <p className='text-3xl items-center rounded-md flex justify-center text-[black] font-mono w-44 h-14 bg-[#c43a3a] shadow-md shadow-black'>
      Score: {score}
      </p>
      </div>
      {selectedSound && (
        <audio className="hidden" src={selectedSound} autoPlay controls />
      )}
      {score === 0 && (
        <Leaderboard username={username} score={userScores[username] || 0} />
      )}
    </div>
  );
};

function Leaderboard({ username, score }) {
  return (
    <div className="leaderboard-body">
      <div className="flex justify-center items-center min-h-screen flex-col">
        <p style={{ fontFamily: 'My Custom Font1' }} className="text-5xl expand py-10">
          Leaderboard
        </p>
        <div className="container">
          <div className="flex justify-start text-sm text-black font-light items-center flex-col">
            <p className='text-xl text-black font-mono'>
              {username && `${username}`} Очков: {score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;