import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch(err) {
      console.log("Error Aaya hai");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="w-11/12 max-w-6xl p-2 mx-auto min-h-[80vh]">
      {
        loading ? 
        (
          <div className="w-full h-[80vh] flex justify-center items-center">
          <Spinner />
          </div>
        ):
        (
          posts.length > 0 ?
          (
            <div
            className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 space-y-10 space-x-5 "
            >
              {
                posts.map((post) => (
                <Product key={post.id} post={post}/>
              ))
              }
            </div>
          ):
          (<div
          className="flex justify-center items-center"
          >No Data Found</div>)
        )
      }
    </div>
  );
};

export default Home;
