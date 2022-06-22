import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Filter from "../../components/Filter/Filter";
import Posts from "../../components/Posts/Posts";
import Search from "../../components/Search/Search";
import AddButton from "../../components/AddButton/AddButton";
import Popup from "../../components/Popup/Popup";
// import Pagination from "../../components/Pagination/Pagination";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const [category, setCategory] = useState();
    const [modalActive, setModalActive] = useState(true)

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

    const handleChangeCategory = (e) => setCategory(e.target.value);

    return (
        <div className="home">
            <div className="home__toolbar">
                <div className="home__search">
                    <Search value={value} onChange={handleChange}/>
                </div>
                <div className="home__filter">
                    <Filter value={category} onChange={handleChangeCategory} />
                </div>
                <div className="home__add_btn">
                   <AddButton />
                </div>
            </div>
            <div className="home__posts">
                <Posts posts={filteredPosts} loading
                ={loading} />
            </div>
            <Popup active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Home;
