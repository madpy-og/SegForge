export const validateImage = async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({
        message: "Body request is empty",
      });
    }

    req.imageBase64 = imageBase64;

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const preprocessingImage = async (req, res) => {
  try {
    const { imageBase64 } = req.imageBase64;

    const base64 = imageBase64.includes(",")
      ? imageBase64.split(",")[1]
      : imageBase64;

    const imageBuffer = Buffer.from(base64, "base64");

    const imageSize = imageBuffer.length;

    req.imageBuffer = imageBuffer;
    req.imageSize = imageSize;
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
