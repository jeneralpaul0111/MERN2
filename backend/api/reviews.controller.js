import ReviewsDAO from "./dao/reviewsDAO.js"

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        try {
            const restaurantID = req.body.restaurant_id
            const review = req.body.text
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }

            const date = new Date()

            const ReviewResponse = await ReviewsDAO.addReview(
                restaurantID,
                userInfo,
                review,
                date,
            )

            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiUpdateReview(req, res, next) {
        try {
            const reviewID = req.body.review_id
            const text = req.body.text
            const date = new Date() 

            const ReviewResponse = await ReviewsDAO.updateReview(
                reviewID,
                req.body.user_id,
                text,
                date
            )

            var {error} = ReviewResponse
            if(error) {
                res.status(400).json({error})
            }

            if (ReviewResponse.modifiedCount ===0){
                throw new Error(
                    "unable to update review - user may not be original poster"
                )
            }

            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }

    static async apiDeleteReview(req, res, next){
        try {
            const reviewId = req.query.id
            const userID = req.body.user_id
            console.log(reviewId)
            console.log(userID)
            const reviewResponse = await ReviewsDAO.deleteReview(
                reviewId,
                userID
            )
            res.json({status: "success"})
        }catch (e) {
            res.status(500).json({error: e.message})
        }
    }

}