import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GIF, Image, Video } from '../API/mediaApi'
import { setError, setLoadings, setResults } from '../redux/features/SearchSlice'
import ResultCard from './ResultCard';



const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTabs, results, loading, error } = useSelector((store) => store.search)

  useEffect(() => {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoadings());
        let data = [];
        if (activeTabs == 'photos') {
          let response = await Image(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.small,
            url: item.links.html
          }));
        }
        if (activeTabs == 'videos') {
          let response = await Video(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }));
        }
        if (activeTabs == 'GIF') {
          let response = await GIF(query);
          data = response.data.map((item) => ({
            id: item.id,
            title: item.title || 'GIF',
            type: 'gif',
            thumbnail: item.file.xs.gif.url,
            src: item.file.sm.gif.url,
            url: `https://klipy.com/gifs/${item.slug}`
          }));
        }
        dispatch(setResults(data));
      }

      catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [activeTabs, query, dispatch])

  if (error) return <h1 className='text-5xl text-(--c2)'>Error</h1>
  if (loading) return <h1 className='text-5xl text-(--c2)'>Loading</h1>



  return (
    <div className='flex flex-wrap pb-3 gap-3 justify-center'>
      {results.map((item, idx) => {
        return <ResultCard key={idx} item={item} />
      })}
    </div>
  )
}

export default ResultGrid