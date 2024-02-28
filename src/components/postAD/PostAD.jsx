import React, { useState } from "react";
import { db, storage } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Text,
  Container,
  Flex,
  Box,
  VStack,
  Input,
  Textarea,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";
import { storeProducts } from "../../redux/slice/productSlice";
import { serverTimestamp } from "firebase/firestore";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Loader from "../loader/Loader";
const PostAD = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const imageRef = ref(storage, `products/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (url) => {
        const productsRef = collection(db, "products");
        const docRef = await addDoc(productsRef, {
          name,
          price,
          description,
          brand,
          imageURL: url,
          createdAt: serverTimestamp(),
        });

        const newProduct = {
          id: docRef.id,
          name,
          price,
          description,
          brand,
          imageURL: url,
          createdAt: serverTimestamp(),
        };

        const currentProducts =
          JSON.parse(localStorage.getItem("product")) || [];

        const updatedProducts = [...currentProducts, newProduct];

        dispatch(storeProducts({ products: updatedProducts }));
        localStorage.setItem("product", JSON.stringify(updatedProducts));

        setLoading(false);
        setUploadSuccess(true);
        setTimeout(() => {
          navigate("/all"); // Or wherever you want to redirect after a successful upload
        }, 2000);
      });
    });
  };

  const formBackground = useColorModeValue("white");

  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg={useColorModeValue("gray.100", "gray.800")}
      padding={20}
    >
      <Box
        w="full"
        maxW="md"
        bg={formBackground}
        p={6}
        rounded="md"
        boxShadow="lg"
        margin="auto"
      >
        <VStack spacing={4} as="form" onSubmit={handleSubmit} align="stretch">
          <Heading pb={4} fontSize="2xl" textAlign="center">
            Upload Product
          </Heading>
          {uploadSuccess ? (
            <Text>Upload successful! Redirecting...</Text>
          ) : loading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <Input
                  placeholder="Price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <FormHelperText>Enter the price in CAD.</FormHelperText>
              </FormControl>
              <FormControl id="description">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={3}
                />
              </FormControl>
              <FormControl id="brand">
                <FormLabel>Brand</FormLabel>
                <Input
                  placeholder="Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl id="file">
                <FormLabel>Product Image</FormLabel>
                <Input type="file" onChange={handleImageChange} required />
              </FormControl>
              <Button colorScheme="blue" type="submit" w="full">
                Upload
              </Button>
            </>
          )}
        </VStack>
      </Box>
    </Flex>
  );
};
export default PostAD;
