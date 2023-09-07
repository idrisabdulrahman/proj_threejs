import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";
// import { HfInference } from "@huggingface/inference";

dotenv.config();
const router = express.Router();
// const Hf_token = process.env.HF_ACCESS_TOKEN;
// const hf = new HfInference(Hf_token);




// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Hello from HUGGING FACE 🤗  -> Dall-E mini" });
// });

// router.route("/").post(async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const result = await hf.textToImage({
//       model: "stabilityai/stable-diffusion-2-1",
//     //   model: "stabilityai/stable-diffusion-xl-base-1.0",
//       inputs: prompt,
//       parameters: {
//         height: 1024,
//         width: 1024,
//         num_inference_steps: 30,
//         guidance_scale: 7.5,
//       },
//     });
//     //Get image Data
//     const imgData = result;

//     const resp = {
//       data: [
//         {
//           b64_json: imgData,
//         },
//       ],
//     };
//     res.status(200).json({ photo: resp.data[0].b64_json });
//     // //Convert to base64
//     // const b_64Img = Buffer.from(imgData).toString("base64");

//     // //Build JSON response
//     // const response = {
//     //     photo: b_64Img
//     // }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from OPEN AI -> Dall-E 2.0" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const resp = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const img = resp.data[0].b64_json;
    res.status(200).json({ photo: img });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});





export default router;
