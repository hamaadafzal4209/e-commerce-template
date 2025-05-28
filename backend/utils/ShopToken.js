<<<<<<< HEAD
// create token and saving that in cookies
=======
// // create token and saving that in cookies
>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
const sendShopToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    // Options for cookies
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    res.status(statusCode).cookie("seller_token", token, options).json({
      success: true,
      user,
<<<<<<< HEAD
=======
      seller,
>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
      token,
    });
  };
  
  export default sendShopToken;
<<<<<<< HEAD
=======



>>>>>>> c8f501c28b9fb24393c62733839fe05d0f190014
  