const ContactList = props => {
  const { contacts } = props.state || [];
  const { renderContactList, filterContacts } = props;
  const foundContacts = filterContacts(contacts);
  return renderContactList(foundContacts);
};
export default ContactList;
