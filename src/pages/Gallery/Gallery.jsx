import React, { useState, useEffect } from "react";
import "./Gallery.css";
import axios from "axios";
import Search from "../../components/Search/Search";
import Modal from "../../components/Modal/Modal";

function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [addPhotos, setAddPhotos] = useState({
        title: "",
        url: ""
    })


    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10`);
            setPhotos(res.data);
            setLoading(false);
        };

        fetchPhotos();
    }, []);

    const postRequest = () => {

        axios.post(
            'https://jsonplaceholder.typicode.com/photos',
            addPhotos)
            .then(response => {
                console.log(response)
                if(response.status === 201) {
                    setAddPhotos({
                        title: "",
                        url: ""
                    })
                    setModalOpen(false);
                }
            }).catch(error => {
                if(error.response.status === 400) {
                    setModalOpen(true)
                }
            })

    }

    const handleChange = (e) => setValue(e.target.value);
    const filteredPhotos = photos.filter(photo => {
        return (photo.title.toLowerCase().includes(value.toLocaleLowerCase()))
    });

    if (loading) {
        return (
            <div className="photos__loading">
                <h2>Загрузка...</h2>
            </div>
        );
    } else {
        return (
            <div className="gallery">
                <div className="gallery__toolbar">
                    <div className="gallery__search">
                        <Search value={value} onChange={handleChange} />
                    </div>
                    <button
                        className="add__photo__btn"
                        onClick={() => { setModalOpen(true) }}
                    >
                        Добавить фото
                    </button>
                </div>
                <div className="photo">
                    <div className="photo__list">
                        {filteredPhotos.map((item) => (
                            <div className="photo__item" key={item.id} >
                                <h3 className="photo__title">{item.title}</h3>
                                <div className="photo__img">
                                    <img style={{ width: "250px", height: "250px" }} src={item.url} alt="foto" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {modalOpen && <Modal setOpenModal={setModalOpen} postRequest={postRequest}>
                    <div className="home__modal__content">
                        <input
                            className="modal__input_file"
                            type="file" />
                    </div>
                </Modal>}
            </div>
        )
    }
}

export default Gallery;
