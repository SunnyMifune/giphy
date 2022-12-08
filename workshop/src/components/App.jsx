import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  const selectedGif = "";
  const gifIds = [];
  const (selectedGif, setSelectedGif) = useState();
  const (gifIds, setGifIds) = useState([]);

  const changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const.newGifIds = res.data.map((gif) => gif.id) });
    });
  };
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GiftList gifIds={gifIds} />
        </div>
      </div>
    );
  };

export default App;
