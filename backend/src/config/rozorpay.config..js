import Razorpay from "razorpay";
export default  instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_SECRET_KEY,
  });

