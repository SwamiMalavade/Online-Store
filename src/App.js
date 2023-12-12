import { useState, useEffect } from "react";
import "./App.css";
import MenuSection from "./Components/MenuSection/MenuSection";
import Navbar from "./Components/Navbar/Navbar";
import Sidenav from "./Components/SideNav/Sidenav";
import axios from "./instance";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "react-use-cart";
import { Spinner } from "./Components/Spinner/Spinner";
import { Pagination } from "./Components/Pagination/Pagination";

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    if (selectedColor) {
      const filteredProducts = products.filter((product) => {
        return product.colorId === selectedColor.id;
      });
      setSelectedMaterial(null);
      setFilteredProducts(filteredProducts);
    }

    if (selectedMaterial) {
      const filteredProducts = products.filter((product) => {
        return product.materialId === selectedMaterial.id;
      });
      setSelectedColor(null);
      setFilteredProducts(filteredProducts);
    }

    // if (!selectedColor && !selectedMaterial) {
    //   setSelectedColor(null);
    //   setSelectedMaterial(null);
    //   setFilteredProducts(products);
    // }

    // if (selectedColor && !selectedMaterial) {
    //   const filteredProducts = products.filter((product) => {
    //     return product.colorId === selectedColor.id;
    //   });

    //   setFilteredProducts(filteredProducts);
    // }

    // if (selectedMaterial && !selectedColor) {
    //   const filteredProducts = products.filter((product) => {
    //     return product.materialId === selectedMaterial.id;
    //   });

    //   setFilteredProducts(filteredProducts);
    // }

    // if (selectedColor && selectedMaterial) {
    //   const filteredProducts = products.filter((product) => {
    //     return (
    //       product.colorId === selectedColor.id &&
    //       product.materialId === selectedMaterial.id
    //     );
    //   });

    //   setFilteredProducts(filteredProducts);
    // }
  }, [selectedColor, selectedMaterial]);

  useEffect(() => {
    getColors();
    getMaterials();
    getProducts();
  }, []);

  const getColors = async () => {
    try {
      const colorsResponse = await axios.get("/colors");
      const { colors } = colorsResponse.data;
      setColors(colors);
    } catch (error) {
      console.error(error);
    }
  };

  const getMaterials = async () => {
    try {
      const materialsResponse = await axios.get("/material");
      const { material } = materialsResponse.data;
      setMaterials(material);
    } catch (error) {
      console.error(error);
    }
  };

  const getProducts = async () => {
    try {
      const productsResponse = await axios.get("/products");
      const { products } = productsResponse.data;
      setProducts(products);
      setFilteredProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CartProvider>
        <Navbar />
        {filteredProducts.length > 0 ? (
          <>
            <div className="d-flex">
              <div style={{ width: "20%" }} className="p-2">
                <Sidenav
                  colors={colors}
                  materials={materials}
                  setSelectedColor={setSelectedColor}
                  setSelectedMaterial={setSelectedMaterial}
                />
              </div>
              <div style={{ width: "80%" }}>
                <MenuSection
                  products={currentPosts}
                  colors={colors}
                  materials={materials}
                />
              </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}
        <Pagination
          totalPosts={filteredProducts?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
