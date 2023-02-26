import Joi from "joi";

const movieValidator = Joi.object({
    search: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required()
})
export {movieValidator}