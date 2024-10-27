

const BigBox = ({addToCart}) => {


  const shoes = [
    {
      image: "https://via.placeholder.com/150",
      model: "Nike Air Max 2021",
      price: 150,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Adidas Ultraboost 21",
      price: 180,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Puma RS-X",
      price: 110,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Reebok Classic Leather",
      price: 75,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "New Balance 574",
      price: 85,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Asics Gel-Kayano 27",
      price: 160,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Under Armour HOVR Phantom",
      price: 140,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Vans Old Skool",
      price: 65,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Converse Chuck Taylor All Star",
      price: 60,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Hoka One One Clifton 7",
      price: 140,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Saucony Kinvara 12",
      price: 110,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Brooks Ghost 14",
      price: 130,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Nike React Infinity Run",
      price: 160,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Adidas NMD_R1",
      price: 140,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Puma Future Rider",
      price: 100,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "New Balance Fresh Foam 1080v11",
      price: 160,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "On Cloudstratus",
      price: 170,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Asics Gel-Lyte III",
      price: 120,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Nike Blazer Mid '77",
      price: 100,
    },
    {
      image: "https://via.placeholder.com/150",
      model: "Adidas Samba",
      price: 85,
    },
 
  ];
  



  return (
    <>
    {
      shoes.map((shoe, Index)=>(
        <>
    <div className="bigBox" key={Index}>
      <img src={shoe.image} alt={shoe.model} />
      <div className="box">
        <p>{shoe.model}</p>
        <p>${shoe.price}</p>
        <button onClick={() => addToCart(shoe)}>Add to cart</button>
      </div>
    </div>
    </>
    ))
    }
    </>
  );
}

export default BigBox;
