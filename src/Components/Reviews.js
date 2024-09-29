import React, { useState } from 'react';
import eclipse from '../asstes/ellipse.jpeg'; // Corrected the spelling of 'assets'

const Reviews = () => {
  const reviews = [
    {
      name: "Ms.RANJITHA",
      rating: 5,
      text: "Hi paarampariyaa, I wanted to take a moment to express my gratitude for your incredible weight loss powder. It’s truly magical! This is my first time using a weight loss powder, and I can’t believe the difference I’ve noticed right away. After just one use, I already feel like it’s making a significant impact on my weight. I drink your powder in the morning, and I don’t even feel hungry until 12 PM! It’s been such a good experience.I will definitely be recommending your product to my friends and family – they can purchase and try it without any hesitation.Thank you for introducing this wonderful product to us!",
      profileImage: eclipse
    },
    {
      name: "Ms.Gayathri",
      rating: 5,
      text: "Hi, first I would like to thank one of my friend who introduced me to this amazing brand . And i have visually noted the changes in her . So i also wanted to try actually this is my third time getting your Nalangu maavu , it worked great on the matter of reducing my acne marks and the glow after using it was just amazing .But its my first time getting weight loss powder and it tasted good and eventually I have started to notice the changes in my body , though it is a slow progress i like it and it has no side effective and beetroot malt  (I got it as I wanted to get rid of my tea drinking habit ) it acted as a great substitute for my addiction and it quickly became my super duper favorite. Thanks to Parampariya for your initiative ❤.",
      profileImage: eclipse
    },
    {
      name: "Dr.Sathya",
      rating: 4,
      text: "My weight was around 75kg. Being a hosteler i couldnt afford any planned health routine  and due to my workschedule i couldnt workout regularly.So my weight went on increasing  and many health related problems begin to occur   like obesity, irregularity in menses , constipation, etc.. so i decided to reduce weight  and started to access the products that may help me to reduce my weight. One day i came across the paarampariya's weight loss powder and i ordered it. Beginning with the hope to reduce my weight i started taking it mrng nd evening regularly, Hence there is no added preservatives so i didnt have fear of side-effects. Taking it for 2 months regularly i lost around 5 kgs in a healthy way and my health related problems began to reduce. I was really happy. Thank u Paarampariya for bringing hope in my weight loss journey. Seeing their result i began to order their other product like nalangu maavu beetroot powder..etc . Nalangu maavu is really the amazing product i could feel the change in my skin once started using it. Black spots in my face got reduced and my skin began to glow...",
      profileImage: eclipse}
  ];

  const ReviewComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedStars, setSelectedStars] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviewerName, setReviewerName] = useState('');

  
    const handleStarClick = (index) => {
      setSelectedStars(index + 1);
    };
  
    const handleSubmit = () => {
      console.log('Stars:', selectedStars);
      console.log('Review:', reviewText);
      setModalOpen(false);
      // Reset states if needed
      setSelectedStars(0);
      setReviewText('');
    };

    return (
      <div className="w-full md:px-[80px] px-[20px] bg-[#0a1a2a] text-white p-10 mx-auto gap-[80px]">
        <h2 className="md:text-[40px] text-[30px] font-semibold text-center mb-[8px]">
          See What Others Are Saying
        </h2>
        <div className="mx-auto border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[670px] mb-[20px]"></div>
        <p className="text-center mb-[80px] text-gray-300 text-[16px] font-normal">
          Authentic stories of satisfaction and experience, fostering enduring trust with each interaction.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8 w-full">
          
          {/* Left Side - Ratings Section */}
          <div className="rounded-[20px] md:w-[336px] h-[360px] xl:w-[336px] flex flex-col bg-[#041423] py-[20px] px-[20px] mb-6 md:mb-0">
            <div className="flex md:flex-row flex-row items-center gap-[5px] mb-4 md:mb-2">
              <div className="rounded-[7px] w-[77px] h-[33px] flex items-center bg-[#ECBC56] px-4 py-1 text-black text-lg font-bold mb-1">
                <div className="flex flex-row gap-[2px] items-center">
                  <p>5.0</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-[1rem] text-black mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.302 1.208-6.006 5.848 1.42 8.283L12 18.897l-7.384 3.88 1.42-8.283-6.006-5.848 8.302-1.208z" />
                  </svg>
                </div>
              </div>

              <div className="text-[22px] font-normal">out of 5</div>
            </div>
            <p className="text-[16px] font-normal">4,567 Ratings | 43 Reviews</p>
            <div className="flex flex-col text-[24px] mt-2">
              {[100, 100, 100, 100, 100].map((percent, i) => (
                <div key={i} className="flex items-center space-x-2 text-center">
                  <div className="flex space-x-1 text-[#ECBC56]">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>
                  <p className="text-[16px]">{percent}%</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="w-[66%] mt-4 bg-[#ECBC56] text-black rounded-lg px-4 py-2"
            >
              Add Review
            </button>
          </div>

          {/* Modal for Adding Review */}
{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center p-5 bg-black bg-opacity-75">
    <div className="bg-[#041423] p-5 rounded-[20px] w-[450px] h-auto">
      {/* Name Field */}
      <div className="mb-4">
        <h2 className="text-[20px] font-normal mb-2">Name:</h2>
        <input
          type="text"
          className="w-full text-xl text-black border border-gray-300 p-2 rounded"
          placeholder="Enter your name..."
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
        />
      </div>
      
      {/* Ratings */}
      <div className="flex flex-col gap-[10px] items-start mb-2">
        <h2 className="text-[20px] font-normal">Review :</h2>
        <div className="flex mb-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer text-[30px] ${index < selectedStars ? 'text-yellow-400' : 'text-gray-300'}`}
              onClick={() => handleStarClick(index)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Field */}
      <h2 className="text-[20px] font-normal mb-2">Comment :</h2>
      <textarea
        className="w-full text-xl text-black border border-gray-300 p-2 rounded"
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />

      {/* Submit and Cancel Buttons */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="bg-[#ECBC56] text-black rounded-lg px-4 py-2"
        >
          Submit
        </button>
        <button
          onClick={() => setModalOpen(false)}
          className="ml-2 text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

            
          {/* Right Side - Reviews Section */}
          <div className="space-y-6 w-full">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#041423] rounded-lg p-[10px] md:p-[40px]  shadow-md">
                <div className="flex items-start space-x-4 mb-[20px]">
                  <img
                    src={review.profileImage}
                    alt={`${review.name}'s profile`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col md:flex-row gap-[0px] md:gap-[20px]">
                    <h3 className="text-[20px] md:text-[23px] font-semibold">{review.name}</h3>
                    <div className="flex text-[27px] gap-[2px]">
                      {Array(review.rating).fill().map((_, i) => (
                        <span key={i} className="text-[#ECBC56]">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[13px] md:text-[20px]  font-normal">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ReviewComponent />;
};

export default Reviews;