// ./express-server/routes/todo.server.route.js
import express from 'express';
import * as contactsController from '../controllers/contacts.server.controller';

const router = express.Router();
router.route('/')
  .get(contactsController.getContacts)
  .post(contactsController.addContact)
  .put(contactsController.updateContact);
router.route('/:id')
  .get(contactsController.getContact)
  .delete(contactsController.deleteContact);
export default router;
