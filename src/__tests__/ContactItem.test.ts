import { shallowMount } from "@vue/test-utils";
import ContactItem from "../components/ContactItem.vue";
import type { Contact } from "../types";

describe("ContactItem.vue", () => {
  const contact: Contact = {
    id: 1,
    name: "John Doe",
    phone: "+7 (123) 456-78-90",
    email: "john.doe@example.com",
  };

  it("renders contact information correctly", () => {
    const wrapper = shallowMount(ContactItem, {
      props: { contact },
    });

    expect(wrapper.text()).toContain(contact.name);
    expect(wrapper.text()).toContain(contact.phone);
    expect(wrapper.text()).toContain(contact.email);
  });

  it('emits "edit" event when Edit button is clicked', async () => {
    const wrapper = shallowMount(ContactItem, {
      props: { contact },
    });

    const editButton = wrapper.find('[data-testid="edit-button"]');
    await editButton.trigger("click");

    expect(wrapper.emitted().edit).toBeTruthy();
    expect(wrapper.emitted().edit[0]).toEqual([contact]);
  });

  it('emits "delete" event when Delete button is clicked', async () => {
    const wrapper = shallowMount(ContactItem, {
      props: { contact },
    });

    const deleteButton = wrapper.find('[data-testid="delete-button"]');
    await deleteButton.trigger("click");

    expect(wrapper.emitted().delete).toBeTruthy();
    expect(wrapper.emitted().delete[0]).toEqual([contact.id]);
  });
});
