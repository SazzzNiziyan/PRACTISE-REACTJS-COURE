import axios from "axios"

const ImageApi = import.meta.env.VITE_UNPLASH_KEY
const VideoApi = import.meta.env.VITE_PEXEL_KEY
const GIFApi = import.meta.env.VITE_KLIPY_KEY


export async function Image(query,page=1,per_page=20){
    var res = await axios.get("https://api.unsplash.com/search/photos",{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${ImageApi}`}
    })
   return res.data
}

export async function Video(query,page=1,per_page=20){
    var res = await axios.get("https://api.pexels.com/videos/search",{
        params:{query,page,per_page},
        headers:{Authorization:VideoApi}
    })
   return res.data
}

export async function GIF(query,page=1,per_page=20){
    var res = await axios.get(`https://api.klipy.com/api/v1/${GIFApi}/gifs/search`,{
        params:{query, page, per_page},
    })
   return res.data.data
}
