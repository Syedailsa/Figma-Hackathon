import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[65%_35%] bg-[#F6F7F9]">
      {/* billing Info */}
      <div className="grid grid-cols-2  md:col-start-1 md:col-end-1  gap-6 m-10 bg-white p-4 rounded-xl ">
        <div className="flex items-center justify-between col-start-1 col-end-3">
          <div>
            <h2 className="font-bold text-xl text-[#1A202C]">Billing Info</h2>
            <p className=" font-medium text-[#90A3BF] ">
              Please enter your billing info
            </p>
          </div>

          <h5 className="mt-4 mr-8 text-[#90A3BF]">step 1 of 4</h5>
        </div>

        <div className="col-start-1 col-end-2 flex flex-col">
          <label htmlFor="Name" className="font-semibold  pb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            minLength={6}
            maxLength={32}
            required
            className="w-[336px] h-[56px] bg-[#F6F7F9] rounded-xl outline-none px-4 "
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Phone Number" className="font-semibold pb-2">
            Phone Number
          </label>
          <input
            type="number"
            placeholder="Phone number"
            minLength={11}
            maxLength={32}
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Address" className="font-semibold flex flex-col pb-2">
            Address
          </label>
          <input
            type="text"
            placeholder="Address"
            minLength={6}
            maxLength={32}
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="town/city" className="font-semibold pb-2">
            Town/City
          </label>
          <input
            type="text"
            placeholder="Town or City"
            minLength={6}
            maxLength={32}
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>
      </div>

      {/* rental info */}
      <div className="grid grid-cols-2  md:col-start-1 md:col-end-1 gap-4 m-10  bg-white p-4 rounded-xl">
        <div className="flex items-center justify-between col-start-1 col-end-3">
          <div>
            <h2 className="font-bold text-xl text-[#1A202C]">Rental Info</h2>
            <p className=" font-medium text-[#90A3BF] ">
              Please select you rental date
            </p>
          </div>

          <h5 className="mt-4 mr-8 text-[#90A3BF]">step 2 of 4</h5>
        </div>

        {/* pick up */}

        <div className="flex gap-2 mt-4 p-4  -ml-3 col-start-1 col-end-3 justify-self-start   ">
          <input type="radio" value={"Pick-up"} name="pick-up" />
          <label htmlFor="pick-up" className="font-semibold">
            Pick-Up
          </label>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="Location"
            className="font-semibold col-start-1 col-end-2 row-start-3 row-end-4 pb-2"
          >
            Locations
          </label>
          <input
            type="text"
            placeholder="select your City"
            minLength={11}
            maxLength={32}
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="Date"
            className="font-semibold col-start-2 col-end-3 row-start-3 row-end-4 flex flex-col pb-2"
          >
            Date
          </label>
          <input
            type="date"
            placeholder="select your date"
            minLength={11}
            maxLength={32}
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>

        <div className=" flex flex-col col-start-1 col-end-3 row-start-4 row-end-5">
          <label
            htmlFor="Time"
            className="font-semibold col-start-1 col-end-3 row-start-4 row-end-5 pb-2 "
          >
            Time
          </label>
          <input
            type="time"
            placeholder="select your time"
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none col-start-1 col-end-3 row-start-4 row-end-5  px-4 "
          />
        </div>

        {/* drop-off */}

        <div className="flex gap-2 mt-4 p-4  -ml-3 col-start-1 col-end-3 row-start-5 row-end-6 justify-self-start ">
          <input type="radio" value={"Drop-off"} name="Drop-off" />
          <label htmlFor="pick-up" className="font-semibold">
            Drop-Off
          </label>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="Location"
            className="font-semibold col-start-1 col-end-2 row-start-5 row-end-6 pb-2"
          >
            Locations
          </label>
          <input
            type="text"
            placeholder="select your City"
            minLength={11}
            maxLength={32}
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="Date"
            className="font-semibold col-start-2 col-end-3 row-start-6 row-end-7 pb-2"
          >
            Date
          </label>
          <input
            type="date"
            placeholder="select your date"
            minLength={11}
            maxLength={32}
            required
            className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>

        <div className="md:flex flex-col">
          <label
            htmlFor="Time"
            className="font-semibold col-start-1 col-end-2 row-start-7 row-end-8 pb-2"
          >
            Time
          </label>
          <input
            type="time"
            placeholder="select your time"
            required
            className="w-[336px] h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
          />
        </div>
      </div>

      {/* payment Method */}
      <div className="md:grid grid-cols-2  md:col-start-1 md:col-end-1 m-10  gap-y-5  bg-white p-4 rounded-xl">
        <div className="md:flex items-center justify-between md:col-start-1 md:col-end-3">
          <div>
            <h2 className="font-bold text-xl text-[#1A202C]">Payment Method</h2>
            <p className=" font-medium text-[#90A3BF] ">
              Please enter your payment method
            </p>
          </div>

          <h5 className="mt-4 mr-4 text-[#90A3BF]">step 3 of 4</h5>
        </div>
        {/* credit card component */}

        <div className="md:col-start-1 md:col-end-3 bg-[#F6F7F9] p-4 rounded-xl">
          <div className="flex gap-2 mt-4 p-4  -ml-3 col-start-1 col-end-3 row-start-2 row-end-3 justify-between">
            <span className="flex gap-2 font-semibold">
              <input type="radio" value={"credit-card"} name="credit-card" />
              <label htmlFor="pick-up">Credit Card</label>
            </span>

            <Image src="/Visa.png" alt="visa logo" height={20} width={92} />
          </div>

          <div className="flex gap-10  pb-4">
            <span className="flex flex-col">
              <label htmlFor="Card Number" className="font-semibold pb-2">
                Card Number
              </label>
              <input
                type="number"
                placeholder="Card number"
                minLength={11}
                maxLength={32}
                required
                className="w-[326px]  h-[56px] bg-white  rounded-xl outline-none  px-4"
              />
            </span>

            <div className="flex flex-col">
              <label
                htmlFor=" Expration Date"
                className="font-semibold col-start-2 col-end-3 row-start-6 row-end-7 pb-2"
              >
                {" "}
                Expration Date
              </label>
              <input
                type="date"
                placeholder="select your date"
                minLength={11}
                maxLength={32}
                required
                className="w-[326px]  h-[56px] bg-white   rounded-xl outline-none  px-4"
              />
            </div>
          </div>

          <div className="flex gap-10 ">
            <span className="flex flex-col ">
              <label htmlFor="Card Holder" className="font-semibold pb-2">
                Card Holder
              </label>
              <input
                type="text"
                placeholder="Card Hold"
                minLength={11}
                maxLength={32}
                required
                className="w-[326px] h-[56px] bg-white   rounded-xl outline-none  px-4"
              />
            </span>

            <span className="flex flex-col">
              <label htmlFor="CVC" className="font-semibold pb-2">
                CVC
              </label>
              <input
                type="text"
                placeholder="CVC"
                required
                className="w-[326px]  h-[56px] bg-white   rounded-xl outline-none  px-4"
              />
            </span>
          </div>
        </div>

        <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3 justify-between bg-[#F6F7F9]  rounded-xl ">
          <span className="flex gap-2">
            <input type="radio" value={"PayPal"} name="PayPal" />
            <label htmlFor="pick-up">PayPal</label>
          </span>

          <Image src="/PayPal.png" alt="PayPal logo" height={24} width={100} />
        </div>

        <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3  justify-between bg-[#F6F7F9]  rounded-xl">
          <span className="flex gap-2">
            <input type="radio" value={"Bitcoin"} name="Bitcoin" />
            <label htmlFor="Bitcoin">Bitcoin</label>
          </span>

          <Image src="/Bitcoin.png" alt="Bitcoin logo" height={20} width={94} />
        </div>
      </div>

      {/* confirmation */}
      <div className="grid grid-cols-2  md:col-start-1 md:col-end-1 m-10 gap-y-5  bg-white p-4 rounded-xl">
        <div className="flex items-center justify-between col-start-1 col-end-3">
          <div>
            <h2 className="font-bold text-xl text-[#1A202C]">Confirmation</h2>
            <p className=" font-medium text-[#90A3BF] ">
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
          </div>

          <h5 className="mt-4 mr-4 text-[#90A3BF]">step 4 of 4</h5>
        </div>

        <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3  justify-between bg-[#F6F7F9]  rounded-xl">
          <span className="flex gap-2">
            <input type="checkbox" value={"agreement-1"} name="agreement-1" />
            <label htmlFor="agreement-1">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </label>
          </span>
        </div>

        <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3  justify-between bg-[#F6F7F9]  rounded-xl">
          <span className="flex gap-2">
            <input type="checkbox" value={"agreement-2"} name="agreement-2" />
            <label htmlFor="agreement-2">
              I agree with our terms and conditions and privacy policy.
            </label>
          </span>
        </div>

        <span className="mt-2">
          <button className="w-[140px] h-[56px] bg-[#3563E9] font-bold rounded-xl text-white">
            Rent Now
          </button>
        </span>

        <div className="flex flex-col col-start-1 col-end-3 gap-y-4">
          <span>
            <Image
              src="/ic-security-safety.png"
              alt="sheild logo"
              height={32}
              width={32}
            />
          </span>
          <span>
            <h3 className="font-semibold leading-6 text-base">
              All your data are safe
            </h3>
            <p className=" font-medium text-[#90A3BF] ">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </span>
        </div>
      </div>

      {/* rental Summary */}
      <div className=" hidden sm:grid grid-cols-1  rounded-xl bg-white row-start-1 row-end-3 md:col-start-2 md:col-end-3 mt-10 p-4 mr-3 ">
        <div className="w-[444px] h-[76px] flex flex-col gap-y-4">
          <h2 className="font-bold text-xl text-[#1A202C]">Rental Summary</h2>
          <p className=" font-medium text-[#90A3BF] w-[410px] text-sm  ">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>

        {/* car div */}
        <div className="flex items-center gap-3 -mt-72">
          <Image src={"/small1.png"} alt="Nissan GTR" height={108} width={132} />
          <span>
            <h3 className="font-bold text-4xl leading-10 ">Nissan GT-R</h3>
            <span className="flex gap-2">
              <Image
                src={"/Review-Star.png"}
                alt="ratings"
                height={20}
                width={108}
              />
              <h5 className="text-sm font-medium leading-5 ">440+ Reviewer</h5>
            </span>
          </span>
        </div>

        <hr className="w-[400px] -mt-36" />

        <div className="flex flex-col gap-y-4 -mt-72">
          <span className="flex gap-72 w-[400px] h-[20px]">
            <h3 className="font-medium text-base text-[#90A3BF]">Subtotal</h3>
            <h3 className="font-semibold text-base leading-6 ">$80.00</h3>
          </span>
          <span className="flex gap-72 w-[400px] h-[20px]">
            <h3 className="font-medium text-base text-[#90A3BF]">Tax</h3>
            <h3 className="font-semibold text-base leading-6 pl-12">$0.00</h3>
          </span>
        </div>

        <div className="bg-[#F6F7F9] rounded-xl flex justify-between w-[400px] h-[56px] items-center -mt-[370px]  ">
          <h3 className="font-medium text-sm leading-5 text-[#90A3BF] ml-4">
            Apply promo code{" "}
          </h3>
          <h2 className="font-semibold text-base leading-6 mr-4">Apply now</h2>
        </div>

        <div className="flex  w-[444px] h-[48px] -mt-[450px]">
          <span className="flex flex-col">
            <h2 className="font-bold text-xl text-[#1A202C]">
              Total Rental Price
            </h2>
            <p className=" font-medium text-[#90A3BF] text-sm w-[284px] h-[20px] ">
              Overall price and includes rental discount
            </p>
          </span>

          <h3 className="text-4xl font-bold leading-10 pl-2">$80.00</h3>
        </div>
      </div>
    </div>
  );
}

















// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-cols-[65%_35%]">
//       {/* billing Info */}
//       <div className="grid grid-cols-2  col-start-1 col-end-1  gap-6 m-10 bg-white ">
//         <div className="flex items-center justify-between col-start-1 col-end-3">
//           <div>
//             <h2 className="font-bold text-xl text-[#1A202C]">Billing Info</h2>
//             <p className=" font-medium text-[#90A3BF] ">
//               Please enter your billing info
//             </p>
//           </div>

//           <h5 className="mt-4 mr-8 text-[#90A3BF]">step 1 of 4</h5>
//         </div>

//         <div className="col-start-1 col-end-2 flex flex-col">
//           <label htmlFor="Name" className="font-semibold  pb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             placeholder="Your Name"
//             minLength={6}
//             maxLength={32}
//             required
//             className="w-[336px] h-[56px] bg-[#F6F7F9] rounded-xl outline-none px-4 "
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="Phone Number" className="font-semibold pb-2">
//             Phone Number
//           </label>
//           <input
//             type="number"
//             placeholder="Phone number"
//             minLength={11}
//             maxLength={32}
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="Address" className="font-semibold flex flex-col pb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             placeholder="Address"
//             minLength={6}
//             maxLength={32}
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="town/city" className="font-semibold pb-2">
//             Town/City
//           </label>
//           <input
//             type="text"
//             placeholder="Town or City"
//             minLength={6}
//             maxLength={32}
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>
//       </div>

//       {/* rental info */}
//       <div className="grid grid-cols-2  col-start-1 col-end-1 gap-4 m-10">
//         <div className="flex items-center justify-between col-start-1 col-end-3">
//           <div>
//             <h2 className="font-bold text-xl text-[#1A202C]">Rental Info</h2>
//             <p className=" font-medium text-[#90A3BF] ">
//               Please select you rental date
//             </p>
//           </div>

//           <h5 className="mt-4 mr-8 text-[#90A3BF]">step 2 of 4</h5>
//         </div>

//         {/* pick up */}

//         <div className="flex gap-2 mt-4 p-4  -ml-3 col-start-1 col-end-3 justify-self-start ">
//           <input type="radio" value={"Pick-up"} name="pick-up" />
//           <label htmlFor="pick-up" className="font-semibold">
//             Pick-Up
//           </label>
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="Location"
//             className="font-semibold col-start-1 col-end-2 row-start-3 row-end-4 pb-2"
//           >
//             Locations
//           </label>
//           <input
//             type="text"
//             placeholder="select your City"
//             minLength={11}
//             maxLength={32}
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="Date"
//             className="font-semibold col-start-2 col-end-3 row-start-3 row-end-4 flex flex-col pb-2"
//           >
//             Date
//           </label>
//           <input
//             type="date"
//             placeholder="select your date"
//             minLength={11}
//             maxLength={32}
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>

//         <div className=" flex flex-col col-start-1 col-end-3 row-start-4 row-end-5">
//           <label
//             htmlFor="Time"
//             className="font-semibold col-start-1 col-end-3 row-start-4 row-end-5 pb-2 "
//           >
//             Time
//           </label>
//           <input
//             type="time"
//             placeholder="select your time"
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none col-start-1 col-end-3 row-start-4 row-end-5  px-4 "
//           />
//         </div>

//         {/* drop-off */}

//         <div className="flex gap-2 mt-4 p-4  -ml-3 col-start-1 col-end-3 row-start-5 row-end-6 justify-self-start ">
//           <input type="radio" value={"Drop-off"} name="Drop-off" />
//           <label htmlFor="pick-up" className="font-semibold">
//             Drop-Off
//           </label>
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="Location"
//             className="font-semibold col-start-1 col-end-2 row-start-5 row-end-6 pb-2"
//           >
//             Locations
//           </label>
//           <input
//             type="text"
//             placeholder="select your City"
//             minLength={11}
//             maxLength={32}
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="Date"
//             className="font-semibold col-start-2 col-end-3 row-start-6 row-end-7 pb-2"
//           >
//             Date
//           </label>
//           <input
//             type="date"
//             placeholder="select your date"
//             minLength={11}
//             maxLength={32}
//             required
//             className="w-[336px]  h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label
//             htmlFor="Time"
//             className="font-semibold col-start-1 col-end-2 row-start-7 row-end-8 pb-2"
//           >
//             Time
//           </label>
//           <input
//             type="time"
//             placeholder="select your time"
//             required
//             className="w-[336px] h-[56px] bg-[#F6F7F9]  rounded-xl outline-none  px-4"
//           />
//         </div>
//       </div>

//       {/* payment Method */}
//       <div className="grid grid-cols-2  col-start-1 col-end-1 m-10  gap-y-5">
//         <div className="flex items-center justify-between col-start-1 col-end-3">
//           <div>
//             <h2 className="font-bold text-xl text-[#1A202C]">Payment Method</h2>
//             <p className=" font-medium text-[#90A3BF] ">
//               Please enter your payment method
//             </p>
//           </div>

//           <h5 className="mt-4 mr-4 text-[#90A3BF]">step 3 of 4</h5>
//         </div>
//         {/* credit card component */}

//         <div className="col-start-1 col-end-3 bg-[#F6F7F9] p-4 rounded-xl">
//           <div className="flex gap-2 mt-4 p-4  -ml-3 col-start-1 col-end-3 row-start-2 row-end-3 justify-between">
//             <span className="flex gap-2 font-semibold">
//               <input type="radio" value={"credit-card"} name="credit-card" />
//               <label htmlFor="pick-up">Credit Card</label>
//             </span>

//             <Image src="/Visa.png" alt="visa logo" height={20} width={92} />
//           </div>

//           <div className="flex gap-10  pb-4">
//             <span className="flex flex-col">
//               <label htmlFor="Card Number" className="font-semibold pb-2">
//                 Card Number
//               </label>
//               <input
//                 type="number"
//                 placeholder="Card number"
//                 minLength={11}
//                 maxLength={32}
//                 required
//                 className="w-[326px]  h-[56px] bg-white  rounded-xl outline-none  px-4"
//               />
//             </span>

//             <div className="flex flex-col">
//               <label
//                 htmlFor=" Expration Date"
//                 className="font-semibold col-start-2 col-end-3 row-start-6 row-end-7 pb-2"
//               >
//                 {" "}
//                 Expration Date
//               </label>
//               <input
//                 type="date"
//                 placeholder="select your date"
//                 minLength={11}
//                 maxLength={32}
//                 required
//                 className="w-[326px]  h-[56px] bg-white   rounded-xl outline-none  px-4"
//               />
//             </div>
//           </div>

//           <div className="flex gap-10 ">
//             <span className="flex flex-col ">
//               <label htmlFor="Card Holder" className="font-semibold pb-2">
//                 Card Holder
//               </label>
//               <input
//                 type="text"
//                 placeholder="Card Hold"
//                 minLength={11}
//                 maxLength={32}
//                 required
//                 className="w-[326px] h-[56px] bg-white   rounded-xl outline-none  px-4"
//               />
//             </span>

//             <span className="flex flex-col">
//               <label htmlFor="CVC" className="font-semibold pb-2">
//                 CVC
//               </label>
//               <input
//                 type="text"
//                 placeholder="CVC"
//                 required
//                 className="w-[326px]  h-[56px] bg-white   rounded-xl outline-none  px-4"
//               />
//             </span>
//           </div>
//         </div>

//         <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3 justify-between bg-[#F6F7F9]  rounded-xl ">
//           <span className="flex gap-2">
//             <input type="radio" value={"PayPal"} name="PayPal" />
//             <label htmlFor="pick-up">PayPal</label>
//           </span>

//           <Image src="/PayPal.png" alt="PayPal logo" height={24} width={100} />
//         </div>

//         <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3  justify-between bg-[#F6F7F9]  rounded-xl">
//           <span className="flex gap-2">
//             <input type="radio" value={"Bitcoin"} name="Bitcoin" />
//             <label htmlFor="Bitcoin">Bitcoin</label>
//           </span>

//           <Image src="/Bitcoin.png" alt="Bitcoin logo" height={20} width={94} />
//         </div>
//       </div>

//       {/* confirmation */}
//       <div className="grid grid-cols-2  col-start-1 col-end-1 m-10 gap-y-5">
//         <div className="flex items-center justify-between col-start-1 col-end-3">
//           <div>
//             <h2 className="font-bold text-xl text-[#1A202C]">Confirmation</h2>
//             <p className=" font-medium text-[#90A3BF] ">
//               We are getting to the end. Just few clicks and your rental is
//               ready!
//             </p>
//           </div>

//           <h5 className="mt-4 mr-4 text-[#90A3BF]">step 4 of 4</h5>
//         </div>

//         <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3  justify-between bg-[#F6F7F9]  rounded-xl">
//           <span className="flex gap-2">
//             <input type="checkbox" value={"agreement-1"} name="agreement-1" />
//             <label htmlFor="agreement-1">
//               I agree with sending an Marketing and newsletter emails. No spam,
//               promissed!
//             </label>
//           </span>
//         </div>

//         <div className="flex gap-2 mt-4 p-4   col-start-1 col-end-3  justify-between bg-[#F6F7F9]  rounded-xl">
//           <span className="flex gap-2">
//             <input type="checkbox" value={"agreement-2"} name="agreement-2" />
//             <label htmlFor="agreement-2">
//               I agree with our terms and conditions and privacy policy.
//             </label>
//           </span>
//         </div>

//         <span className="mt-2">
//           <button className="w-[140px] h-[56px] bg-[#3563E9] font-bold rounded-xl text-white">
//             Rent Now
//           </button>
//         </span>

//         <div className="flex flex-col col-start-1 col-end-3 gap-y-4">
//           <span>
//             <Image
//               src="/ic-security-safety.png"
//               alt="sheild logo"
//               height={32}
//               width={32}
//             />
//           </span>
//           <span>
//             <h3 className="font-semibold leading-6 text-base">
//               All your data are safe
//             </h3>
//             <p className=" font-medium text-[#90A3BF] ">
//               We are using the most advanced security to provide you the best
//               experience ever.
//             </p>
//           </span>
//         </div>
//       </div>

//       {/* rental Summary */}
//       <div className="grid grid-cols-1  rounded-xl bg-white row-start-1 row-end-3 col-start-2 col-end-3 mt-10 ">
//         <div className="w-[444px] h-[76px] flex flex-col gap-y-4">
//           <h2 className="font-bold text-xl text-[#1A202C]">Rental Summary</h2>
//           <p className=" font-medium text-[#90A3BF] w-[410px] text-sm  ">
//             Prices may change depending on the length of the rental and the
//             price of your rental car.
//           </p>
//         </div>

//         {/* car div */}
//         <div className="flex items-center gap-3 -mt-72">
//           <Image src={"/Look.png"} alt="Nissan GTR" height={108} width={132} />
//           <span>
//             <h3 className="font-bold text-4xl leading-10 ">Nissan GT-R</h3>
//             <span className="flex gap-2">
//               <Image
//                 src={"/Review-Star.png"}
//                 alt="ratings"
//                 height={20}
//                 width={108}
//               />
//               <h5 className="text-sm font-medium leading-5 ">440+ Reviewer</h5>
//             </span>
//           </span>
//         </div>

//         <hr className="w-[400px] -mt-36" />

//         <div className="flex flex-col gap-y-4 -mt-72">
//           <span className="flex gap-72 w-[400px] h-[20px]">
//             <h3 className="font-medium text-base text-[#90A3BF]">Subtotal</h3>
//             <h3 className="font-semibold text-base leading-6 ">$80.00</h3>
//           </span>
//           <span className="flex gap-72 w-[400px] h-[20px]">
//             <h3 className="font-medium text-base text-[#90A3BF]">Tax</h3>
//             <h3 className="font-semibold text-base leading-6 pl-12">$0.00</h3>
//           </span>
//         </div>

//         <div className="bg-[#F6F7F9] rounded-xl flex justify-between w-[400px] h-[56px] items-center -mt-[370px]  ">
//           <h3 className="font-medium text-sm leading-5 text-[#90A3BF] ml-4">
//             Apply promo code{" "}
//           </h3>
//           <h2 className="font-semibold text-base leading-6 mr-4">Apply now</h2>
//         </div>

//         <div className="flex  w-[444px] h-[48px] -mt-[450px]">
//           <span className="flex flex-col">
//             <h2 className="font-bold text-xl text-[#1A202C]">
//               Total Rental Price
//             </h2>
//             <p className=" font-medium text-[#90A3BF] text-sm w-[284px] h-[20px] ">
//               Overall price and includes rental discount
//             </p>
//           </span>

//           <h3 className="text-4xl font-bold leading-10 pl-2">$80.00</h3>
//         </div>
//       </div>
//     </div>
//   );
// }