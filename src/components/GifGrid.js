import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const { data:images, loading } = useFetchGifs(category);

    // // se ejecuta solo cuando el componente se renderisa por primera vez
    // useEffect( ()=>{
    //     getGifs( category ).then(setImages)
    // }, [ category ])

       
     
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        { loading && <p>Loading</p>}
        <div className='card-grid'>
            {
                images.map( (img) =>
                    <GiftGridItem 
                        key={img.id}
                        {...img}
                    />
                )
            }
        </div>
        </>
    )
}