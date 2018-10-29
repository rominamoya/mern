import Contact from '../models/contacts.server.model';

export const getContacts = (req, res) => {
  Contact.find().exec((err, contacts) => {
    if (err) {
      return res.json({ success: false, message: err });
    }
    return res.json({ success: true, message: 'Contacts fetched successfully', contacts });
  });
};
export const addContact = (req, res) => {
  const newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({ success: true, message: 'Contact added successfully', contact });
  });
};
export const updateContact = (req, res) => {
  Contact.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, contact) => {
    if (err) {
      if (err) return res.status(404).send({ message: 'Contact not found' });
    }
    return res.json({ success: true, message: 'Updated successfully', contact });
  });
};
export const getContact = (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) return res.json({ success: false, message: 'Some Error' });
    return res.json({ success: true, message: 'Contact fetched by id successfully test', contact });
  });
};
export const deleteContact = (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, contact) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }
    return res.json({ success: true, _id: contact.id, message: `${contact.firstName} ${contact.lasnetName} deleted successfully` });
  });
};
