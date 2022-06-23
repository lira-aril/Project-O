import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
// import Filter from "../../components/Filter/Filter";
import Posts from "../../components/Posts/Posts";
import Search from "../../components/Search/Search";
import Modal from "../../components/Modal/Modal";
// import Pagination from "../../components/Pagination/Pagination";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [addPost, setAddPost] = useState({
        title: "",
        body: ""
    })

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    const handleChange = (e) => setValue(e.target.value);
    const filteredPosts = posts.filter(post => {
        return (post.title.toLowerCase().includes(value.toLocaleLowerCase()) ||
            post.body.toLowerCase().includes(value.toLocaleLowerCase()))
    });

    const handleChangeTitle = (e) => setAddPost({
        ...addPost,
        title: e.target.value
    });

    const handleChangeBody = (e) => setAddPost({
        ...addPost,
        body: e.target.value
    })

    const postRequest = () => {

        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            addPost)
            .then(response => {
                console.log(response)
                if(response.status === 201) {
                    setAddPost({
                        title: "",
                        body: ""
                    })
                    setModalOpen(false);
                }
            }).catch(error => {
                if(error.response.status === 400) {
                    setModalOpen(true)
                }
            })

    }

    return (
        <div className="home">
            <div className="home__toolbar">
                <div className="home__search">
                    <Search value={value} onChange={handleChange} />
                </div>
                <div className="home__filter">
                    {/* <Filter /> */}
                </div>
                <button
                    className="add__post__btn"
                    onClick={() => { setModalOpen(true) }}
                >
                    Добавить пост
                </button>
            </div>
            <div className="home__posts">
                <Posts posts={filteredPosts} loading
                    ={loading} />
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} postRequest={postRequest}>
                <div className="home__modal__content">
                    <input 
                        className="modal__input_title" 
                        type="text" 
                        placeholder="Заголовок"
                        value={addPost.title}
                        onChange={handleChangeTitle} 
                    />
                    <textarea 
                        className="modal__input_body" 
                        placeholder="Ваш пост..." 
                        maxLength="600"
                        value={addPost.body}
                        onChange={handleChangeBody} 
                    />
                </div>
            </Modal>}
            {/* <Pagination /> */}
        </div>
    )
}

export default Home;
