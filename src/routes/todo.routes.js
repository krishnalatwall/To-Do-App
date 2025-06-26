import express from "express";
import {
    createTodo,
    getTodo,
    getTodoById,
    updateTodo,
    deleteTodo
} from "../controllers/todo.controller";

const router = express.Router();

router.post('/', createTodo);
router.get('/',getTodo);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete("/:id", deleteTodo);

export default router;