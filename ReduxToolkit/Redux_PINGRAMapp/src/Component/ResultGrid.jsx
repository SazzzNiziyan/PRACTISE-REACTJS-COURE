/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GIF, Image, Video } from '../API/mediaApi'
import { setActiveTabs, setError, setLoadings, setResults } from '../redux/features/SearchSlice'
import ResultCard from './ResultCard';

const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)




  useEffect(() => {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoadings())
        let data = []
        if (activeTab === 'photos') {
          let response = await Image(query)
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            thumbnail: item.url.small,
            title: item.all.description,
            src: item.urls.full
          }))
        }
        if (activeTab === 'videos') {
          let response = await Video(query)
          data = response.results.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }))
        }
        if (activeTab === 'GIF') {
          let response = await GIF(query)
          data = response.results.map((item) => ({
            id: item.id,
            title: item.title || 'GIF',
            type: 'gif',
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url
          }))
        }
        setResults(data)
      }

      catch (err) {
        dispatch(setError)
      }
    }

    getData()
  }, [activeTab, query, dispatch])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading</h1>



  return (
    <div>
      {results.map((item, idx) => {
        return <div key={idx}><ResultCard item={item} /></div>
      })}
    </div>
  )
}

export default ResultGrid