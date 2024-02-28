import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
})

router.route('/').get((req,res)=> {
        res.status(200).json({message:"Hello from DALL E"})
})

router.route('/').post(async (req, res)=> {
    console.log(req);
    try {
        const {prompt} = req.body;

        const response = await openai.images.generate ({
            model: "dall-e-3",
            prompt:  prompt,
            size: "1024x1024",
            quality: "standard",
            n: 1
        })
    console.log(response);
        const image_url = response.data[0].url;

        res.status(200).json({photo: image_url});

    } catch (error){
        // console.log(error);
        console.error("Error details:", error);
        res.status(500).json({message:"Something went wrong"})
    }

})
export default router;