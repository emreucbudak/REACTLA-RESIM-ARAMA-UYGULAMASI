import './App.css'
import Header from './Header'
import axios from 'axios'
import Tablo from './Tablo'
import {db} from './db'

function App() {
  const searchImages = async (data) => {
    const cevap = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization : 'Client-ID yTWU1o6dQqCd3Yw5UH7Ck4Pi77T-p_rFm4srl_D4MEQ'

      },
      params: {
        query:data
      }

    })
  cevap.data.results.map((elemental) => {
    db.push(elemental.urls.small)
  })
  }
  const onHandle = (veri) => {
    searchImages(veri)
  }
  return (
    <>
      <Header search={onHandle} />
      {
        db.map((data,index) => {
          return <Tablo key={index} resim={data}/>
        })
      }
    </>
  )
}

export default App
