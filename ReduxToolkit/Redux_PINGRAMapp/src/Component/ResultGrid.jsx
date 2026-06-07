import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GIF, Image, Video } from '../API/mediaApi'
import { setError, setLoadings, setResults, setPage, appendResults } from '../redux/features/SearchSlice'
import ResultCard from './ResultCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, page, activeTabs, results, loading, error } = useSelector((store) => store.search)
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoadings());
        let data = [];
        if (activeTabs === 'photos') {
          let response = await Image(query, page);
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.small,
            url: item.links.html
          }));
        }

        if (activeTabs === 'videos') {
          let response = await Video(query, page);
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }));
        }
        if (activeTabs === 'GIF') {
          let response = await GIF(query, page);
          data = response.data.map((item) => ({
            id: item.id,
            title: item.title || 'GIF',
            type: 'gif',
            thumbnail: item.file.xs.gif.url,
            src: item.file.sm.gif.url,
            url: `https://klipy.com/gifs/${item.slug}`
          }));
        }
        if (page === 1) {
          dispatch(setResults(data));
          setHasMore(true);
        } else {
          dispatch(appendResults(data));
        }
        if (data.length === 0) {
          setHasMore(false);
        }

      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [activeTabs, query, page, dispatch])

  function fetchMore() {
    if (loading) return;
    dispatch(setPage(page + 1));
  }


  if (error) return <h1 className='text-5xl text-(--c2)'>Error</h1>

  return (
    <InfiniteScroll
      className='scrollbar-none'
      dataLength={results.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={loading ? <h1 className='text-2xl my-30 text-center text-(--c2)'>Loading...</h1> : null}
      scrollableTarget="scrollableDiv"
    ><div className='flex flex-wrap pb-3 gap-3 justify-center'>
        {results.map((item) => {
          return <ResultCard key={item.id} item={item} />
        })}
      </div></InfiniteScroll>
  )
}

export default ResultGrid