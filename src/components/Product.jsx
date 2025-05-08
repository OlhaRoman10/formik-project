// src/Product.jsx

export default function Product({ name, imgUrl, price }) {
	

  return (
    <div>
      <h2>{name}</h2>
	  <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
};

// const App = () => {
//   return (
//     <>
// 	  <h1>Books of the week</h1>
//       <BookList books={favBooks} />
//     </>
//   );
// };