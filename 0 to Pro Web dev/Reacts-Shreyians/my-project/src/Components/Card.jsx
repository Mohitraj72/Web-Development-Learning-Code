import React from "react";

function Card() {
  const data = [
    {
      Image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basis",
      description:
        "Sale Starts Early from 1st May, Midnight for Prime Members. 10% Instant Discount on HDFC Bank Credit Cards and EasyEMI on Cards.",
      instock: true,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Flipkart ",
      description:
        "Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member.",
      instock: false,
    },
    {
      Image:
        "https://images.unsplash.com/photo-1633431406066-27dc4345ca98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Skype ",
      description:
        "Beginning March 2025, you will be able to sign into Microsoft Teams Free with your Skype credentials, and your chats and contacts will be right there ready for ...",
      instock: true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 flex-initial bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100  rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.Image}
              alt="images"
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold"> {elem.name} </h2>
            <p className="text-xs mt-3">{elem.description}</p>
            <button
              className={`px-3 py-1 ${
                elem.instock ? "bg-sky-600" : "bg-red-500"
              } rounded-full mt-4 text-xs`}
            >
              {elem.instock ? "In stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
