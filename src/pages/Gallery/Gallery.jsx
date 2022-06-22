import React, {useState, useEffect} from "react";
import "./Gallery.css";
import Search from "../../components/Search/Search"

function Gallery() {
    const [photos, setPhotos] = useState({
        items: []
    })

    function getPhoto() {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
        .then(response => response.json())
        .then(data => setPhotos({
            items: data
        }))
    }

    useEffect(getPhoto, [photos])
    return (
        <div className="gallery">
            <Search />
            <div className="photo">
            <h1 className="main__title">Фотографии</h1>
            <div className="photo__list">
            {photos.items.map((item) => (
               <div className="photo__item" key = {item.id} >
                    <h3 className="photo__title">{item.title}</h3>
                    <div className="photo__img">
                        <img style={{width: "250px", height: "250px"}} src={item.url} alt="foto"/>
                    </div>
               </div>
           ))}
            </div>   
        </div>
        </div>
    )
}

export default Gallery;
