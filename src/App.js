import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My 1st Post",
      date: "July 27, 2017",
      body: "First day of College Life"
    },
    {
      id: 2,
      title: "My 2nd Post",
      date: "March 17, 2019",
      body: "Covid starting period"
    },
    {
      id: 3,
      title: "My 3rd Post",
      date: "August 31, 2021",
      body: "Started new journey"
    }
  ]);

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [editPostId, setEditPostId] = useState(null);
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");

  useEffect(() => {
    const filteredResult = posts.filter((post) =>
      post.body.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResult.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy');
    const newPost = { id, title: postTitle, date: datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate('/basic-social-media-app');
  };

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate('/basic-social-media-app');
  };

  const handleEdit = (id) => {
    const post = posts.find((post) => post.id === id);
    if (post) {
      setEditPostId(post.id);
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
      navigate(`/basic-social-media-app/post/${id}/edit`);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const datetime = format(new Date(), 'MMMM dd, yyyy');
    const updatedPosts = posts.map((post) =>
      post.id === editPostId
        ? { ...post, title: editPostTitle, date: datetime, body: editPostBody }
        : post
    );
    setPosts(updatedPosts);
    setEditPostId(null);
    setEditPostTitle("");
    setEditPostBody("");
    navigate('/basic-social-media-app');
  };

  return (
    <div className="App">
      <Header title="Simple Social Media App" />
      <Nav 
        search={search}
        setSearch={setSearch}
        showSearch={location.pathname === '/basic-social-media-app/' || location.pathname === '/basic-social-media-app'} // Show search only on Home
      />

      <br /><br />
      <div className="main-content">
        <Routes>
          <Route path='/basic-social-media-app' element={<Home posts={searchResult} />} />
          <Route path='/basic-social-media-app/post'>
            <Route index element={
              <NewPost 
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            } />
            <Route
              path=':id'
              element={<PostPage posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} />}
            />

            <Route 
              path=':id/edit'
              element={
                <NewPost
                  handleSubmit={handleEditSubmit}
                  postTitle={editPostTitle}
                  setPostTitle={setEditPostTitle}
                  postBody={editPostBody}
                  setPostBody={setEditPostBody}
                />
              }
            />
          </Route>
          <Route path='/basic-social-media-app/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </div><br />
      <Footer />
    </div>
  );
}

export default App;
